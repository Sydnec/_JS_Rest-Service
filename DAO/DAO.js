import Singleton from "./Singleton.js";

const dbFilePath = "./db/database.db";
const connection = new Singleton(dbFilePath);

// https://gist.github.com/keyurgolani/6f5f78f8e2ad3a63c1321baa938a615c#file-dao-js
function fetchData(selectOption, tableName, requestParameters, processData) {
  let request = "SELECT " + selectOption + " FROM " + tableName;
  if (requestParameters !== undefined) {
    request += " WHERE " + requestParameters;
  }
  connection.db.get(request, function (error, row) {
    if (error) {
      throw error;
    } else {
      processData(request + row);
    }
  });
}
function executeRequest(sqlString, processResult) {
  connection.db.run(sqlString, function (err, rows) {
    if (err) {
      throw err;
    } else {
      processResult(rows);
    }
  });
}
function insertData(tableName, requestParameters, processInsert) {
  let request = "INSERT INTO " + tableName + "SET " + requestParameters;
  connection.db.run(request, function (error, rows) {
    if (error) {
      throw error;
    } else {
      processInsert(rows);
    }
  });
}
function updateData(tableName, setParameters, whereParameters, processUpdate) {
  let request =
    "UPDATE " +
    tableName +
    " SET " +
    setParameters +
    " WHERE " +
    whereParameters;
  connection.db.run(request, function (error, rows) {
    if (error) {
      throw error;
    } else {
      processUpdate(rows);
    }
  });
}

export default { executeRequest, fetchData, insertData, updateData };
