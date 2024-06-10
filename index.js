import express from 'express';
import cors from "cors";
import errorHandler from "./src/modules/core/errorHandler";
import dbConnect from "./src/modules/core/db";
import logger from "./src/modules/core/logger";
import parseResponse from "./src/modules/core/parseResponse";
import routes from "./src/modules/core/routes";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
//import cors from "./src/modules/core/cors";

const app = express();
const PORT = process.env.PORT;
// const PORT = 5050

app.use(express.static('public'))

dotenv.config()
dbConnect()
logger(app)
parseResponse(app)

app.use(cookieParser())
//cors(app)
app.use(cors({
    credentials: true,
    origin: true
}))

// const allowedOrigins = ['https://client-mern-auth.netlify.app', 'http://localhost:3000'];
//
// app.use(cors({
//     credentials: true,
//     origin: function (origin, callback) {
//         // allow requests with no origin (like mobile apps or curl requests)
//         if (!origin) return callback(null, true);
//         if (allowedOrigins.indexOf(origin) === -1) {
//             const msg = 'The CORS policy for this site does not allow access from the specified origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     }
// }));

routes(app)


errorHandler(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

// 'https://client-mern-auth.netlify.app'
// 'http://localhost:3000'
