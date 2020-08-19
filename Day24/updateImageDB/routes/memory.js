const express = require("express");
const {
  createMemory,
  getAllMemory,
  getMemoryById,
  updateMemory,
} = require("../controllers/memory");
const router = express.Router();

// params
router.param("memoryId", getMemoryById);

router.post("/addmemory", createMemory);
router.get("/allmemory", getAllMemory);
router.put("/memory/:memoryId", updateMemory);
module.exports = router;
