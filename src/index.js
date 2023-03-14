import express from 'express';
import cors from "cors";
import errorHandler from "./modules/core/errorHandler";
import dbConnect from "./modules/core/db";
import logger from "./modules/core/logger";
import parseResponse from "./modules/core/parseResponse";
import routes from "./modules/core/routes";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 5050;

dotenv.config()
dbConnect()
logger(app)
parseResponse(app)
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
cors(app);

routes(app)
errorHandler(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
