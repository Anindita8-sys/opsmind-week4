import mongoose from "mongoose"

const ChatSchema = new mongoose.Schema({

question:{
type:String,
required:true
},

answer:{
type:String,
required:true
},

time:{
type:Date,
default:Date.now
}

})

const Chat = mongoose.model("Chat", ChatSchema)

export default Chat