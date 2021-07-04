import * as dotenv from "dotenv"
dotenv.config()

export const PORT = process.env.PORT || 3000
export const REDIS_HOST = process.env.REDIS_HOST || "localhost"
export const REDIS_PORT = process.env.REDIS_PORT || 6378
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD || undefined
