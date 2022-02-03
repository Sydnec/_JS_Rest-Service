import sqlite3 from "sqlite3";

// https://stackoverflow.com/questions/59626230/how-to-create-singleton-classes-in-javascript
class DB {
  constructor(dbFilePath) {
    if (DB.instance) {
      console.warn("Already connected to the SQlite database !");
      return DB.instance;
    } else {
      DB.instance = this;
      // create the connection with database
      this.db = new sqlite3.Database(dbFilePath, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Connected to the SQlite database.");
      });
      return this;
    }
  }
}
DB.instance = null;
export default DB;
