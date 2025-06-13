const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/roleMiddleware");

const router = express.Router();

// Public route
router.post("/login", loginUser);

// Protected routes - Admin only
router.use(authMiddleware); // Apply auth middleware to all routes below
router.route("/")
  .get(isAdmin, getUsers)
  .post(isAdmin, createUser);
router.route("/:id")
  .put(isAdmin, updateUser)
  .delete(isAdmin, deleteUser);

module.exports = router;
