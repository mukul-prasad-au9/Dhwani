let db;
const mongoConnect = require("../../db");
mongoConnect((data) => (db = data));

exports.getState = (req, res) => {
  db.collection("state")
    .find()
    .toArray((err, Data) => {
      res.json(Data);
    });
};
exports.addState = (req, res) => {
  const data = {
    state: req.body.state,
  };
  db.collection("state").insertOne(data, (err, data) => {
    if (err) console.log(err);
    res.json({ data: data.ops[0]._id });
  });
};
