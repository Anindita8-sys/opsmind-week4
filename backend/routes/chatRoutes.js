import express from "express"

const router = express.Router()

let chats = []

router.post("/chat", (req, res) => {

  const { question, answer } = req.body

  const newChat = { question, answer }

  chats.push(newChat)

  res.json(newChat)
})

router.get("/history", (req, res) => {
  res.json(chats)
})

export default router