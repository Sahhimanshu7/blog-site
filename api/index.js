import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";

import "./config/mongo.js";

import userRouter from "./routes/user.routes.js";
import blogRoutes from "./routes/blog.routes.js";

const app = express();

dotenv.config();

app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));
app.use(express.json());
app.use(urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

//implmenting routes
app.use('/api/user/', userRouter);
app.use('/api/blog/', blogRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port : ${PORT}`);
})
