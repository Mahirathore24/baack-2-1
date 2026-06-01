const Feedback = require("../models/Feedback");

const createFeedback = async (req, res, next) => {
  try {
    const { message, rating } = req.body;

    if (!message || !rating) {
      res.status(400);
      throw new Error("Message and rating are required");
    }

    const feedback = await Feedback.create({
      message,
      rating,
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      message: "Feedback created",
      data: feedback
    });
  } catch (error) {
    next(error);
  }
};

const getFeedback = async (req, res, next) => {
  try {
    const feedbackList = await Feedback.find({ userId: req.user.id }).sort({ createdAt: -1 });

    res.json({
      success: true,
      message: "Feedback fetched",
      data: feedbackList
    });
  } catch (error) {
    next(error);
  }
};

const updateFeedback = async (req, res, next) => {
  try {
    const { message, rating } = req.body;

    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      res.status(404);
      throw new Error("Feedback not found");
    }

    if (feedback.userId.toString() !== req.user.id) {
      res.status(403);
      throw new Error("Not authorized to update this feedback");
    }

    feedback.message = message ?? feedback.message;
    feedback.rating = rating ?? feedback.rating;

    const updatedFeedback = await feedback.save();

    res.json({
      success: true,
      message: "Feedback updated",
      data: updatedFeedback
    });
  } catch (error) {
    next(error);
  }
};

const deleteFeedback = async (req, res, next) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) {
      res.status(404);
      throw new Error("Feedback not found");
    }

    if (feedback.userId.toString() !== req.user.id) {
      res.status(403);
      throw new Error("Not authorized to delete this feedback");
    }

    await feedback.deleteOne();

    res.json({
      success: true,
      message: "Feedback deleted"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createFeedback,
  getFeedback,
  updateFeedback,
  deleteFeedback
};
