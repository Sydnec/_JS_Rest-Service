import sqlite3 from "sqlite3";

class Singleton {
  constructor(dbFilePath) {
    if (Singleton.instance != null) {
      console.warn("Already connected to the SQlite database !");
      return Singleton.instance;
    } else {
      Singleton.instance = this;
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

Singleton.instance = null;
export default Singleton;
