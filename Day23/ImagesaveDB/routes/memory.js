const express = require("express");
const { createMemory, getAllMemory } = require("../controllers/memory");
const router = express.Router();

router.post("/addmemory", createMemory);
router.get("/allmemory", getAllMemory);
module.exports = router;
