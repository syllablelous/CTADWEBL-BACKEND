const express = require("express");
const {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");
const authMiddleware = require("../middleware/authMiddleware");
const { isAdminOrEditor } = require("../middleware/roleMiddleware");

const router = express.Router();

// Public routes
router.route("/name/:name").get(getArticle);

// Protected routes - Admin and Editor only
router.use(authMiddleware); // Apply auth middleware to all routes below
router.route("/")
  .get(getArticles)
  .post(isAdminOrEditor, createArticle);
router.route("/:id")
  .put(isAdminOrEditor, updateArticle)
  .delete(isAdminOrEditor, deleteArticle);

module.exports = router;
