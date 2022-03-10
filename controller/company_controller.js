import DAO from "../DAO/DAO.js";

function getAll(req, res) {
  DAO.executeRequest("SELECT * FROM company", (err, param) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(param);
    }
  });
}
function get(req, res) {
  DAO.fetchData("*", "company", "id	 = " + req.params.id, (err, param) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(param);
    }
  });
}
function add(req, res) {
  DAO.insertData(
    "company (name, city)",
    "('" + req.params.name + "', '" + req.params.city + "')",
    (err, param) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json(param);
      }
    }
  );
}
function update(req, res) {
  DAO.updateData(
    "company",
    req.params.set,
    "id = " + req.params.id,
    (err, param) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json(param);
      }
    }
  );
}
function del(req, res) {
  DAO.executeRequest(
    "DELETE FROM company WHERE id = " + req.params.id,
    (err, param) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json(param);
      }
    }
  );
}

export default { getAll, add, get, update, del };
