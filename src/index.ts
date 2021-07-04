import express from "express"
import urlShortnerRoute from "./routes/url"
import { PORT } from "./config"

const app = express()

app.use(express.json())
app.use("/", urlShortnerRoute)

app.listen(PORT)

export default app
