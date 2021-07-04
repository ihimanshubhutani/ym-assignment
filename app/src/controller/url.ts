import { Request, Response } from "express"
import {
  getShortendCodeUrl,
  generateShortenedCode,
} from "../helper/urlFunctions"

/**
 * Redirects User to Orignal URL
 * @param req : Express Request Object
 * @param res : Express Response Object
 * @returns   : Response, redirects user to URL
 */

export const getOriginalUrl = async (
  req: Request,
  res: Response,
): Promise<void | Response> => {
  const { shortnedUrlCode } = req.params
  const orignalUrl = await getShortendCodeUrl(shortnedUrlCode)
  if (!orignalUrl) {
    return res.status(404).send({ msg: "Invalid Code" })
  }
  return res.redirect(orignalUrl)
}

/**
 * Converts Orignal URL to Shortened URL
 * @param req : Express Request Object
 * @param res : Express Response Object
 * @returns   : Response {code}, Shortened URL code
 */

export const getShortenedUrlCode = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { url } = req.body

  const shortnedUrlCode = await generateShortenedCode(url)
  return res.json({ code: shortnedUrlCode })
}
