import sqlite3 from "sqlite3";

export default class DAO {
  constructor(dbPath) {
    this.db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        return console.error(err.message);
      }
      console.log("Connected to the SQlite database.");
    });
  }
  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, function (err) {
        if (err) {
          console.log("Error running sql " + sql);
          console.log(err);
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  }
  alterTable(tableName, alter) {
    const sql = "ALTER TABLE " + tableName + " " + alter;
    return this.db.run(sql);
  }
  createTable(tableName) {
    const sql =
    "CREATE TABLE IF NOT EXISTS " +
    tableName +
    "(id INTEGER PRIMARY KEY AUTOINCREMENT)";
    this.db.run(sql);
    return "Table "+tableName+"created."
  }
  renameColumn(tableName, lastName, newName) {
    this.alterTable(tableName, "RENAME " + lastName + " TO " + newName);
    return "Table "+lastName+" is now called "+newName+"."
  }
  addColumn(tableName, columnName, columnType) {
    this.alterTable(tableName, "ADD " + columnName + " " + columnType);
    return "Table "+tableName+" changed."
  }
  dropColumn(tableName, columnName) {
    this.alterTable(tableName, "DROP " + columnName);
    return "Table "+tableName+" deleted."
  }
  select(selectOption, tableName) {
    const sql = "SELECT " + selectOption + " FROM " + tableName;
    return this.db.run(sql)
  }
  insert(tableName, columnName, value){
    const sql = "INSERT INTO " + tableName+" ("+columnName+") VALUES('"+value+"')"
    return this.db.run(sql)
  }
}
