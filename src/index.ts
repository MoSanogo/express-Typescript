import http from "http";
import express from "express";
import { json, urlencoded } from "body-parser";
import helmet from "helmet";
import { AppRouter } from "./AppRoute";
import "./controllers";

const app = express();
app.use([helmet(), json(), urlencoded({ extended: true })]);
app.use(AppRouter.getInstance());
const server = http.createServer(app);
const PORT = process.env.PORT || 6000;
server.listen(PORT, () => {
  console.log("The server has started ....");
});
