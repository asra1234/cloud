const db = require("./db");

exports.createUser = (email, password) => {
  return db.promise().query(
    "INSERT INTO users (email, password) VALUES (?, ?)",
    [email, password]
  );
};

exports.findUserByEmail = (email) => {
  return db.promise().query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
};
