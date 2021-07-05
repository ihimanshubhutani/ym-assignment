import { Request, Response } from "express"
import {
  getShortendCodeUrl,
  generateShortenedUrl,
} from "../helper/urlFunctions"

/**
 * Redirects User to Orignal URL
 * @param req : Express Request Object
 * @param res : Express Response Object
 * @returns   : Response, redirects user to URL
 */

export const redirectToOrignalUrl = async (
  req: Request,
  res: Response,
): Promise<void | Response> => {
  const { shortenedUrlCode } = req.params
  let orignalUrl = await getShortendCodeUrl(shortenedUrlCode)
  if (!orignalUrl) {
    return res.status(404).send({ msg: "Invalid Shortned URL" })
  }

  if (!/^(f|ht)tps?:\/\//i.test(orignalUrl)) {
    orignalUrl = `http://${orignalUrl}`
  }

  return res.redirect(orignalUrl)
}

/**
 * Converts Orignal URL to Shortened URL
 * @param req : Express Request Object
 * @param res : Express Response Object
 * @returns   : Response {shortnedUrl}, Shortened URL
 */

export const getShortenedUrl = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const { url } = req.body

  const { host } = req.headers
  const shortnedUrl = await generateShortenedUrl(url, host)
  return res.json({ shortned_url: shortnedUrl })
}
