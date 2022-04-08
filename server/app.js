const express = require("express");
const cors = require("cors")
const mongoose= require("mongoose")

const app = express();

app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://hunghoang1:12345678!@cluster0.0mgjk.mongodb.net/todoDB", {useNewUrlParser: true})

const listSchema = {
    message: String
}

const Item = mongoose.model("Item", listSchema)

const item1 = new Item ({
    message: "go shopping"
})
const item2 = new Item ({
    messsage: "go cooking"
})


app.get("/", (req, res)=>{
    Item.find((err, result)=>{
        if(err){
            console.log(err)
        }else {
            res.send(result)
           console.log("responded to get request")
        }
    })
})

app.post("/", function(req, res){
    const inputClient = new Item({
        message: req.body.message
    })
    inputClient.save()
})

app.listen(9000, (req, res)=>{
    console.log("server running on 9000")
})