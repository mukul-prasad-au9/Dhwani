let db;
const mongoConnect = require("../../db");
mongoConnect((data) => (db = data));
const { mongo } = require("mongoose");

exports.getChild = (req, res) => {
  db.collection("child")
    .find()
    .toArray((err, Data) => {
      res.send(Data);
    });
};
exports.childDetail = (req, res) => {
  const id = req.params.id;
  db.collection("child")
    .find({ _id: mongo.ObjectID(id) })
    .toArray((err, Data) => {
      res.send(Data);
    });
};
exports.addChild = (req, res) => {
  let data = {
    name: req.body.name,
    sex: req.body.sex,
    DOB: req.body.date,
    Father: req.body.father,
    Mother: req.body.mother,
    State: req.body.state,
    District: req.body.district,
  };
  db.collection("child").insertOne(data, (err, val) => {
    res.json(val);
  });
};
