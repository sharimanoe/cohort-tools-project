const studentRouter = require("./routes/students.routes");
const cohortRouter = require("./routes/cohort.routes");
const authRouter = require("./routes/auth.routes");
const userRouter = require("./routes/user.routes");
const express = require("express");
require("dotenv").config();

const {
  errorHandler,
  notFoundHandler,
} = require("./error-handling/error-handling");

// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();

//DATABASE
require("./db");

// MIDDLEWARE
require("./config")(app);

// app.use(express.json());
// app.use(morgan("dev"));
app.use(express.static("public"));
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

//ROUTES//Middlewares
app.use("/docs", (req, res) => {
  res.sendFile(__dirname + "/views/docs.html");
});

app.use("/", studentRouter);
app.use("/", cohortRouter);
app.use("/", authRouter);
app.use("/", userRouter);

//ERROR Middlewares
app.use(errorHandler);
app.use(notFoundHandler);

// START SERVER
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
