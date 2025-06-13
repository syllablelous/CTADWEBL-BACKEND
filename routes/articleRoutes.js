const express = require("express");
const {
  getArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articleController");

const router = express.Router();

router.route("/").get(getArticles).post(createArticle);
router.route("/:id").put(updateArticle).delete(deleteArticle);
router.route("/name/:name").get(getArticle);

module.exports = router;
