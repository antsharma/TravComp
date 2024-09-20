const router = require("express").Router();
const {
  createTripProcess,
  getAllTripsProcess,
  getOneTripProcess,
  getAllPlacesFromTripProcess,
  updateTripProcess,
  deleteTripProcess,
  getAllPlacesToShareProcess,
} = require("../controllers/trips.controller");
const { verifyToken } = require("../middleware/jwt.middleware");

router.post("/create", verifyToken, createTripProcess);

router.get("/", verifyToken, getAllTripsProcess);

router.get("/:id", verifyToken, getOneTripProcess);

router.get("/:id/places", verifyToken, getAllPlacesFromTripProcess);

router.get("/share/:id/places", getAllPlacesToShareProcess);

router.patch("/update/:id", verifyToken, updateTripProcess);

router.delete("/delete/:id", verifyToken, deleteTripProcess);

module.exports = router;
