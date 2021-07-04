import { Request, Response, NextFunction } from "express"
import Joi from "joi"

/**
 * Middleware, Validates URL in Express Request {body.url}
 * @param req  : Express Request Object
 * @param res  : Express Response Object
 * @param next : Express Next Object
 * @returns    : Reponse with error message if validation failed, otherwise void
 */

export const urlValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  const schema = Joi.object({
    url: Joi.string()
      .regex(/^https?:\/\/([\da-z\\.-]+)\.([a-z\\.]{2,6})([\\/\w \\.-]*)*\/?$/)
      .required()
      .messages({
        "string.pattern.base": `"url" field contains invalid url`,
        "any.required": `"url" field is required`,
      }),
  })

  const options = {
    abortEarly: false,
    allowUnknown: true,
  }

  const { error } = schema.validate(req.body, options)

  if (error) {
    return res.status(422).send({ msg: error.details[0].message })
  }
  return next()
}
