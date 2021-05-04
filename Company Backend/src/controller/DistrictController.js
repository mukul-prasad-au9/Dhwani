let db;
const mongoConnect = require("../../db");
mongoConnect((data) => (db = data));

exports.getDistrict = (req, res) => {
  db.collection("district")
    .find()
    .toArray((err, Data) => {
      res.json(Data);
    });
};

exports.addDistrict = (req, res) => {
  const data = {
    state: req.body.state,
    district: req.body.district,
  };
  db.collection("district").insertOne(data, (err, data) => {
    if (err) console.log(err);
    res.json({ message: "done", data: data.ops[0]._id });
  });
};
