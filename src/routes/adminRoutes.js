const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { listUsers } = require("../controllers/adminController");

const router = express.Router();

function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Acceso restringido a administradores" });
  }
  return next();
}

router.get("/all", authMiddleware, requireAdmin, listUsers);

module.exports = router;
