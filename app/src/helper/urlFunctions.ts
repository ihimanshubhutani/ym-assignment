import { generate } from "shortid"
import { getRedisKeyValue, setRedisKeyValue } from "../db/redis"

/**
 * Generates shortned code and stores URL in Redis
 * @param url : URL, to be stored in Redis
 * @returns   : code, Shortened Code for URL
 */

export const generateShortenedCode = async (url: string): Promise<string> => {
  const key = await getRedisKeyValue(url)
  if (key) {
    return key
  }
  const code = generate()
  await setRedisKeyValue(code, url, "EX", 86400)
  await setRedisKeyValue(url, code, "EX", 86400)
  return code
}

/**
 * Get URL from Shortened Code
 * @param shortnedCode : Shortened Code for URL
 * @returns            : Orignal URL
 */

export const getShortendCodeUrl = async (
  shortnedCode: string,
): Promise<string | null> => await getRedisKeyValue(shortnedCode)
