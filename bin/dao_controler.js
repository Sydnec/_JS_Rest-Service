import sqlite3 from "sqlite3";
import person from "./class/person.js";
import company from "./class/company.js";

export default class DAO {
  constructor(db){
    this.db = db
  }
  
}

// getAll(tableName){
//   var result
//   this.db.all("SELECT * FROM "+tableName, [], (err, rows)=>{
//     result = rows
//   })
//   console.log(result)
//   return result
// }
// alterTable(tableName, alter) {
//   const sql = "ALTER TABLE " + tableName + " " + alter;
//   return this.db.run(sql);
// }
// createTable(tableName) {
//   const sql =
//     "CREATE TABLE IF NOT EXISTS " +
//     tableName +
//     "(id INTEGER PRIMARY KEY AUTOINCREMENT)";
//   this.db.run(sql);
//   return "Table " + tableName + " created.";
// }
// renameColumn(tableName, lastName, newName) {
//   this.alterTable(tableName, "RENAME " + lastName + " TO " + newName);
//   return "Table " + lastName + " is now called " + newName + ".";
// }
// addColumn(tableName, columnName, columnType) {
//   this.alterTable(tableName, "ADD " + columnName + " " + columnType);
//   return "Table " + tableName + " changed.";
// }
// dropColumn(tableName, columnName) {
//   this.alterTable(tableName, "DROP " + columnName);
//   return "Table " + tableName + " deleted.";
// }
// select(selectOption, tableName) {
//   const sql = "SELECT " + selectOption + " FROM " + tableName;
//   return this.db.run(sql);
// }
// insert(tableName, columnName, value) {
//   const sql =
//     "INSERT INTO " +
//     tableName +
//     " (" +
//     columnName +
//     ") VALUES('" +
//     value +
//     "')";
//   return this.db.run(sql);
// }