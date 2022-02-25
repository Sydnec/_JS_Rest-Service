import DAO from "../DAO/DAO.js";

function getAll() {}
function get(id) {
  DAO.fetchData("*", "company", "ID = " + id + ";", print);
}
function add() {}
function update() {}
function del() {}
function print(blabla) {
  console.log(blabla);
}

export default { getAll, add, get, update, del };
