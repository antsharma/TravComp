const router = require("express").Router();
const {
  createPlaceProcess,
  getAllPlacesProcess,
  getOnePlaceProcess,
  updatePlaceProcess,
  deletePlaceProcess,
} = require("../controllers/places.controller");
const { verifyToken } = require("../middleware/jwt.middleware");

router.post("/create", verifyToken, createPlaceProcess);

router.get("/", verifyToken, getAllPlacesProcess);

router.get("/:id", verifyToken, getOnePlaceProcess);

router.patch("/update/:id", verifyToken, updatePlaceProcess);

router.delete("/delete/:id", verifyToken, deletePlaceProcess);

module.exports = router;
