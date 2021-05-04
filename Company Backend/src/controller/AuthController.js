const jwt = require("jsonwebtoken");

let db;
const mongoConnect = require("../../db");
mongoConnect((data) => (db = data));

exports.register = (req, res) => {
  try {
    var data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    db.collection("user").insertOne(data, (err, response) => {
      if (err) return next(err);
      return res.json(response);
    });
  } catch (err) {
    console.log(err);
  }
};
exports.login = (req, res) => {
  try {
    db.collection("user")
      .find({ email: req.body.email })
      .toArray((err, userData) => {
        if (err) console.log(err);
        if (!userData[0]) {
          return res.json({
            message: "User email doesnot exist",
            status: 300,
            error: "User email doesnot exist",
          });
        }
        if (userData[0]) {
          if (req.body.password != userData[0].password) {
            return res.json({ message: "invalid password" });
          }
        }
        var token = jwt.sign({ id: userData._id }, "secret", {
          expiresIn: 86400,
        });
        return res.header("auth-token", token).json({
          message: "Login successfull",
        });
      });
  } catch (err) {
    console.log(err);
  }
};
