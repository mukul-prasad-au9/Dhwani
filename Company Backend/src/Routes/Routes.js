const express = require("express");
const router = express.Router();
const file = require("express-fileupload");
router.use(file({ useTempFiles: true }));

const { register, login } = require("../controller/AuthController");
const { addState, getState } = require("../controller/StateController");
const {
  getDistrict,
  addDistrict,
} = require("../controller/DistrictController");
const {
  getImage,
  imageDetail,
  addImage,
} = require("../controller/ImageController");
const {
  getChild,
  addChild,
  childDetail,
} = require("../controller/ChildController");

router.post("/login", login);
router.post("/register", register);
router.get("/state", getState);
router.post("/addstate", addState);
router.get("/district", getDistrict);
router.post("/adddistrict", addDistrict);
router.get("/child", getChild);
router.get("/detailchild/:id", childDetail);
router.post("/addchild", addChild);

module.exports = router;
