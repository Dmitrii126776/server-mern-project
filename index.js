import express from 'express';
//import cors from "cors";
import cors from "./src/modules/core/cors";
import errorHandler from "./src/modules/core/errorHandler";
import dbConnect from "./src/modules/core/db";
import logger from "./src/modules/core/logger";
import parseResponse from "./src/modules/core/parseResponse";
import routes from "./src/modules/core/routes";
import dotenv from "dotenv";


const app = express();
const PORT = process.env.PORT;

app.use(express.static('public'))

dotenv.config()
dbConnect()
logger(app)
parseResponse(app)
cors(app);

// app.use(cors({
//     origin: 'https://client-mern-auth.netlify.app' || 'http://localhost:3000',
//     credentials: true,
// }));
// app.use(cors({
//     credentials: true,
//     origin: 'https://client-mern-auth.netlify.app'
// }))

routes(app)


errorHandler(app);

app.listen(PORT || 5050, () => {
    console.log(`Server running on port ${process.env.PORT || 5050}`);
});
// app.listen(PORT, () => {
//     console.log(`Example app listening on port ${PORT}`);
// });

// 'https://client-mern-auth.netlify.app'
// 'http://localhost:3000'
