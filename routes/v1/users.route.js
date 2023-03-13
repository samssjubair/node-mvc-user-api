const express = require("express");
const {
  getAllUsers,
  getRandomUsers,
  getSpecificUser,
  saveAUser,
  deleteSpecificUser,
  updateUser,
  bulkUpdate,
} = require("../../controllers/persons.controller");
const limiter = require("../../middlewares/limiter");
const router = express.Router();

router.route("/all").get(getAllUsers);

router.get("/random", getRandomUsers);

router.patch('/bulk-update',bulkUpdate);

router
  .route("/:id")
  .get(getSpecificUser)
  .delete(deleteSpecificUser)
  .patch(updateUser);




router.post("/", saveAUser);

module.exports = router;
