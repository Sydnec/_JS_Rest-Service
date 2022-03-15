import DAO from "../DAO/DAO.js";
import token from "../token.js";

function getAll(req, res) {
  DAO.executeRequest("SELECT * FROM person", (err, param) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      token.verify(req, res, () => {
        res.status(200).json(param);
      });
    }
  });
}
function get(req, res) {
  DAO.fetchData("*", "person", "id	 = " + req.params.id, (err, param) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      token.verify(req, res, () => {
        res.status(200).json(param);
      });
    }
  });
}
function add(req, res) {
  DAO.insertData(
    "person (name, firstName)",
    "('" + req.params.name + "', '" + req.params.firstName + "')",
    (err, param) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        token.verify(req, res, () => {
          res.status(200).json(param);
        });
      }
    }
  );
}
function update(req, res) {
  DAO.updateData(
    "person",
    req.params.set,
    "id = " + req.params.id,
    (err, param) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        token.verify(req, res, () => {
          res.status(200).json(param);
        });
      }
    }
  );
}
function del(req, res) {
  DAO.executeRequest(
    "DELETE FROM person WHERE id = " + req.params.id,
    (err, param) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        token.verify(req, res, () => {
          res.status(200).json(param);
        });
      }
    }
  );
}

export default { getAll, add, get, update, del };
