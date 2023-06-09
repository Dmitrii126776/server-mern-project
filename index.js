import express from 'express';
import cors from "cors";
import errorHandler from "./src/modules/core/errorHandler";
import dbConnect from "./src/modules/core/db";
import logger from "./src/modules/core/logger";
import parseResponse from "./src/modules/core/parseResponse";
import routes from "./src/modules/core/routes";
import dotenv from "dotenv";
//import cors from "./src/modules/core/cors";

const app = express();
const PORT = process.env.PORT;
//const PORT = 5050

app.use(express.static('public'))

dotenv.config()
dbConnect()
logger(app)
parseResponse(app)
//cors(app)
app.use(cors({
    credentials: true,
    origin: 'https://client-mern-auth.netlify.app' || 'http://localhost:3000'
}))

routes(app)


errorHandler(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

// 'https://client-mern-auth.netlify.app'
// 'http://localhost:3000'
