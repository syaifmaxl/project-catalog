import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import indexRouter from './routers/web/index';
import config from './config';

const allowedOrigins = config.feSite.split(',').map((origin) => origin.trim().replace(/\/$/, ''));

const app: Application = express();

app.use('/uploads', express.static('uploads'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(cors());
// app.use(
//     cors({
//         origin: function (origin, callback) {
//             if (!origin || allowedOrigins.includes(origin)) {
//                 callback(null, true);
//             } else {
//                 callback(new Error("Not allowed by CORS: " + origin));
//             }
//         },
//         credentials: true,
//     })
// );

app.use('/api', indexRouter);

export default app;
