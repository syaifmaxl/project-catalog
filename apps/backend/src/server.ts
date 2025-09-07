import express, { Application, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cookieParser from "cookie-parser";
import cors from "cors"
import * as env from "dotenv"
import indexRouter from "./routers/web/index"


env.config();

const allowedOrigins = (process.env.FE_SITE || "")
  .split(",")
  .map(origin => origin.trim().replace(/\/$/, ""));

const app : Application = express()
const port = 3000

const prisma = new PrismaClient()
export { prisma }

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS: " + origin));
            }
        },
        credentials: true,
    })
);

app.use("/api",indexRouter)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})