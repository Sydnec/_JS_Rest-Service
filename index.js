import express from "express";
import personRouter from "./routes/person_router.js";
import companyRouter from "./routes/company_router.js";
import connection from "./DAO/Singleton.js";

const app = express();
const dbFilePath = "./db/database.db";
const company = companyRouter(new connection(dbFilePath));
const person = personRouter(new connection(dbFilePath));

app.use("/person/", company);
app.use("/company/", person);

app.listen(3000);
