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
  createTable(tableName, columns) {
    const sql =
      "CREATE TABLE IF NOT EXISTS " +
      tableName +
      "(id INTEGER PRIMARY KEY AUTOINCREMENT," +
      columns +
      ")";
    console.log('Table "' + tableName + '" created');
    return this.db.run(sql);
  }
  renameColumn(tableName, lastName, newName) {
    return this.alterTable(tableName, "RENAME " + lastName + " TO " + newName);
  }
  addColumn(tableName, columnName, columnType) {
    return this.alterTable(tableName, "ADD " + columnName + " " + columnType);
  }
  deleteColumn(tableName, columnName) {
    return this.alterTable(tableName, "DROP " + columnName);
  }
  select(tableName, selectOption) {
    const sql = "SELECT " + selectOption + " FROM " + tableName;
  }
}
