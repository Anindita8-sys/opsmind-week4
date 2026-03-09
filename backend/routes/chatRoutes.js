import express from "express"
import Chat from "../models/chat.js"
import { validateChat } from "../middleware/middleware.js"

const router = express.Router()

// Save chat
router.post("/chat", validateChat, async (req,res)=>{

try{

const {question, answer} = req.body

const newChat = await Chat.create({

question,
answer

})

res.json(newChat)

}catch(err){

res.status(500).json({error:err.message})

}

})


// Get history
router.get("/history", async(req,res)=>{

try{

const chats = await Chat.find().sort({time:-1})

res.json(chats)

}catch(err){

res.status(500).json({error:err.message})

}

})

export default router