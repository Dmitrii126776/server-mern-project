import express from 'express';
import cors from "cors";
import errorHandler from "./src/modules/core/errorHandler";
import dbConnect from "./src/modules/core/db";
import logger from "./src/modules/core/logger";
import parseResponse from "./src/modules/core/parseResponse";
import routes from "./src/modules/core/routes";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static('public'))

dotenv.config()
dbConnect()
logger(app)
parseResponse(app)
app.use(cors({
    credentials: true,
    origin: 'https://unrivaled-tarsier-a8961e.netlify.app'
}))

routes(app)

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

errorHandler(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

export default app;
