const express = require("express");
const {
  createMemory,
  getAllMemory,
  getMemoryById,
} = require("../Controllers/memory");
const { getUserById } = require("../Controllers/user");
const router = express.Router();

// params
router.param("memoryId", getMemoryById);
router.param("userId", getUserById);

router.post("/addmemory/:userId", createMemory);
router.get("/allmemory", getAllMemory);
module.exports = router;
