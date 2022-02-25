import express from "express";
import personRouter from "./routes/person_router.js";
import companyRouter from "./routes/company_router.js";

const app = express();

app.get("/", (req, res) => {
  //----------MARKDOWN-----------
  res.send("<h1>EN COURS DE DEVELOPPEMENT ...</h1>");
});

app.use("/person/", personRouter);
app.use("/company/", companyRouter);

app.listen(3000);
