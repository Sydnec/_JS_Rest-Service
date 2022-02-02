import sqlite3 from "sqlite3";

// https://stackoverflow.com/questions/59626230/how-to-create-singleton-classes-in-javascript
class DB {
  constructor(dbFilePath) {
    this.dbFilePath = dbFilePath;
    if (DB.instance) {
      console.warn("already connected!");
      return Connection.instance;
    } else {
      DB.instance = this;
      // create the connection with database
      console.log("connection established");
    }
  }
  static connect() {
    if (DB.instance) {
      return DB.instance;
    } else {
      return new Connection();
    }
  }
}
DB.instance = null;
export default DB;
