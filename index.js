import express from "express";
import personRouter from "./routes/person_router.js";
import companyRouter from "./routes/company_router.js";
import token from "./token.js";
import cookieParser from "cookie-parser";

// https://lo-victoria.com/build-rest-api-with-nodejs-design-and-plan-restful-api

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.locals.basedir = "./public";

app.get("/", (req, res) => {
  res.send("read the Readme.md");
});

app.post("/auth", (req, res) => {
  token.login(req, res);
});
app.post("/refresh", (req, res) => {
  token.refresh(req, res);
});

app.use("/person/", personRouter);
app.use("/company/", companyRouter);

app.listen(3000);
