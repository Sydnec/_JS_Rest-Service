import express from "express";
import personRouter from "./routes/person_router.js";
import companyRouter from "./routes/company_router.js";
import Singleton from "./DAO/DB_singleton.js";

const app = express();
const dbFilePath = "./db/database.db";
const companyRouter = companyRouter(Singleton.connect(dbFilePath));
const personRouter = personRouter(Singleton.connect(dbFilePath));

app.use("/person/", personRooter);
app.use("/company/", companyRouter);

app.listen(3000);
