const router = require("express").Router();
const Testres=require("../model/Testres");

router.post("/", async (req, res) => {
    const newTestres = new Testres(req.body);
    try {
      const savedTestres = await newTestres.save();
      res.status(200).json(savedTestres);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //get all pins
  router.get("/", async (req, res) => {
    try {
      const testres = await Testres.find();
      res.status(200).json(testres);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;