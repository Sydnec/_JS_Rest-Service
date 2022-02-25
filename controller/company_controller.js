import DAO from "../DAO/DAO.js";

function getAll() {
  DAO.executeRequest("SELECT * FROM company", (param) => {
    console.log(param);
  });
}
function get(id) {
  DAO.fetchData("*", "company", "id	 = " + id, (param) => {
    console.log(param);
  });
}
function add() {}
function update() {}
function del() {}

export default { getAll, add, get, update, del };
