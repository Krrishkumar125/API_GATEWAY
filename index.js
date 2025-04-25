const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const rateLimit = require("express-rate-limit");
const axios = require("axios");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const BOOKING_SERVICE_URL = process.env.BOOKING_SERVICE_URL;

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 5,
});

app.use(morgan("combined"));
app.use(limiter);
app.use("/bookingservice", async (req, res, next) => {
  try {
    const response = await axios.get(
      "http://localhost:3002/api/v1/isAuthenticated",
      {
        headers: {
          "x-access-token": req.headers["x-access-token"],
        },
      }
    );
    console.log(response.data);
    if (response.data.success) {
      next();
    } else {
      return res.status(401).json({ Message: "unauthorised" });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorised",
    });
  }
});
app.use(
  "/bookingservice",
  createProxyMiddleware({
    target: BOOKING_SERVICE_URL,
    changeOrigin: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
 