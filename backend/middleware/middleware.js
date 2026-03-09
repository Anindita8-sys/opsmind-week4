// middleware/middleware.js

export const logger = (req, res, next) => {

console.log(`${req.method} ${req.url}`)

next()

}


// validate chat input
export const validateChat = (req, res, next) => {

const { question, answer } = req.body

if (!question || !answer) {

return res.status(400).json({
error: "Question and answer are required"
})

}

next()

}