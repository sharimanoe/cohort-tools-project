const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const FRONTEND_URL = process.env.ORIGIN || "http://localhost:3000";

// Middleware configuration
module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    cors({
      origin: ["http://127.0.0.1:5173"],
    })
  );

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
