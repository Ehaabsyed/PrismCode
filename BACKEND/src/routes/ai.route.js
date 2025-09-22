import express from 'express'
import { getAIResponse } from '../controller/ai.controller.js';
const router=express.Router()

router.get("/", (req, res) => {
  res.send("Code Reviewer AI route is working");
});
router.post("/review", getAIResponse);



 

export default router
