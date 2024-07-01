import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnect } from "./config/config.mongoose.js";
import sneakerRouter from "./routes/sneaker.routes.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(express.json(), cors(), express.urlencoded({ extended: true }));
app.use("/sneaker", sneakerRouter);
app.use("/registration", userRouter);

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
