let db;
const mongoConnect = require("../../db");
mongoConnect((data) => (db = data));
const cloudinary = require("../cloudinary");

exports.getImage = (req, res) => {
  db.collection("image")
    .find()
    .toArray((err, data) => {
      res.json({ message: "ok", data: data });
    });
};

exports.imageDetail = (req, res) => {
  db.collection("image")
    .find({ Id: req.params.id })
    .toArray((err, data) => {
      res.json({ message: "ok", data: data });
    });
};

exports.addImage = (req, res) => {
  const imageFile = req.files.imageFile;
  cloudinary.uploader.upload(imageFile.tempFilePath, (err, reply) => {
    if (err) return console.log(err);
    const data = {
      Id: req.params.id,
      file_path: reply.secure_url,
      cloudinary_id: reply.public_id,
    };
    db.collection("image").insertOne(data, (err, data) => {
      if (err) return console.log(err);
      return res.json({ message: "File Uploaded", status: 200 });
    });
  });
};
