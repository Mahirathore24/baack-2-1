const express = require("express");
const {
  createFeedback,
  getFeedback,
  updateFeedback,
  deleteFeedback
} = require("../controllers/feedbackController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, createFeedback);
router.get("/", auth, getFeedback);
router.put("/:id", auth, updateFeedback);
router.delete("/:id", auth, deleteFeedback);

module.exports = router;
