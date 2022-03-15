import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const users = {
  admin: "admin",
};
const Key = "BUGEZDYFUEZSG";
const expireTime = 3 * 60;

function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    return res.status(404).end();
  } else if (users[username] !== password) {
    return res.status(401).end();
  }
  const token = jwt.sign({ username }, Key, {
    algorithm: "HS256",
    expiresIn: expireTime,
  });
  res.cookie("token", token, { maxAge: expireTime * 1000 });
  res.end();
}

function refresh(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).end();
  }
  var data;
  try {
    data = jwt.verify(token, Key);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }
  const nowSeconds = Math.round(Number(new Date()) / 1000);
  if (data.exp - nowSeconds > 30) {
    return res.status(400).end();
  }
  const newToken = jwt.sign({ username: data.username }, Key, {
    algorithm: "HS256",
    expiresIn: expireTime,
  });
  res.cookie("token", newToken, { maxAge: expireTime * 1000 });
  res.end();
}

function verify(req, res, callback) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).end();
  }
  var data;
  try {
    data = jwt.verify(token, Key);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).end();
    }
    return res.status(400).end();
  }
  const newToken = jwt.sign({ username: data.username }, Key, {
    algorithm: "HS256",
    expiresIn: expireTime,
  });
  res.cookie("token", newToken, { maxAge: expireTime * 1000 });
  res.status(200).send(callback(res, req));
}

export default { login, refresh, verify };
