import DAO from "../DAO/DAO.js";
import company from "../class/company.js";

function getAll() {
  DAO.executeRequest("SELECT * FROM company", (param) => {
    // console.log(param);
  });
}
function get(id) {
  DAO.fetchData("*", "company", "id	 = " + id, (param) => {
    return new company(id, param.name, param.city);
  });
}
function add() {}
function update() {}
function del() {}

export default { getAll, add, get, update, del };
