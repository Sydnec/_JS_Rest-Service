import express from "express";
import personRouter from "./routes/person_router.js";
import companyRouter from "./routes/company_router.js";
import connection from "./DAO/DB_singleton.js";

const app = express();
const dbFilePath = "./db/database.db";
const companyRouter = companyRouter(new connection(dbFilePath));
const personRouter = personRouter(new connection(dbFilePath));

app.use("/person/", personRouter);
app.use("/company/", companyRouter);

app.listen(3000);
