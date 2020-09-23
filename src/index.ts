import express, { Express, Request, Response } from "express"
import cors from "cors"
import helmet from "helmet"
import bodyparser from "body-parser"
import pino from "pino-http"
// local imports
import * as config from "./config"
import { log } from "./helper"

const app: Express = express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(helmet())
// configure pino logging with express
app.use(pino({ logger: log }))

app.get("/", (req: Request, res: Response) => {
    res.status(200).send("API Working")
})

app.listen(config.PORT, (): void => {
    log.info("Server started on port " + config.PORT)
})
