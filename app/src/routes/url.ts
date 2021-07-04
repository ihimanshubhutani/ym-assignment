import { getShortenedUrlCode, getOriginalUrl } from "../controller/url"
import { Router } from "express"
import { urlValidator } from "../middleware/schemaValidator"

const urlRoutes = Router()

urlRoutes.post("/", urlValidator, getShortenedUrlCode)
urlRoutes.get("/:shortnedUrlCode", getOriginalUrl)

export default urlRoutes
