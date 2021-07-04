import { createClient } from "redis"
import { promisify } from "util"
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from "../config"

const redisClient = createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
  password: REDIS_PASSWORD,
})

redisClient.on("connect", () => {
  console.log("Connected to Redis Server")
})

redisClient.on("ready", () => {
  console.log("Redis server is ready to accept connections")
})

redisClient.on("error", (err: Error) => {
  console.log(err)
  process.exit(0)
})

const getRedisKeyValue = promisify(redisClient.get).bind(redisClient)
const setRedisKeyValue = promisify(redisClient.set).bind(redisClient)

export { getRedisKeyValue, setRedisKeyValue }
