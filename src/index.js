// In src/index.js
const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const v1AuthRouter = require("./v1/routes/authRoutes");
const v1WinnerRouter = require("./v1/routes/winnerRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/auth", v1AuthRouter);
app.use("/api/v1/winners", v1WinnerRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);

  V1SwaggerDocs(app, PORT);
});
