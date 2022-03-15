import Singleton from "./Singleton.js";

const dbFilePath = "./db/database.db";
const connection = new Singleton(dbFilePath);

function fetchData(selectOption, tableName, requestParameters, processData) {
  let request = "SELECT " + selectOption + " FROM " + tableName;
  if (requestParameters !== undefined) {
    request += " WHERE " + requestParameters;
  }
  connection.db.all(request, function (err, row) {
    if (err) {
      throw err;
    } else {
      processData(err, row);
    }
  });
}
function executeRequest(sqlString, processResult) {
  connection.db.all(sqlString, function (err, rows) {
    if (err) {
      throw err;
    } else {
      processResult(err, rows);
    }
  });
}
function insertData(tableName, requestParameters, processInsert) {
  let request = "INSERT INTO " + tableName + " VALUES " + requestParameters;
  connection.db.run(request, function (err, rows) {
    if (err) {
      throw err;
    } else {
      processInsert(err, rows);
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
  connection.db.run(request, function (err, rows) {
    if (err) {
      throw err;
    } else {
      processUpdate(err, rows);
    }
  });
}

export default { executeRequest, fetchData, insertData, updateData };
