import { getShortenedUrl, redirectToOrignalUrl } from "../controller/url"
import { Router } from "express"
import { urlValidator } from "../middleware/schemaValidator"

const urlRoutes = Router()

urlRoutes.post("/", urlValidator, getShortenedUrl)
urlRoutes.get("/:shortenedUrlCode", redirectToOrignalUrl)

export default urlRoutes
