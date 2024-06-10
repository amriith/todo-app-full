const express = require("express");
const app = express();
const { createTodo } = require("./types");
const { updateTodo } = require("./types");
const { todo } = require( "./db")
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/todo",async function(req,res){
const userPayLoad = req.body;
const parsedPayLoad = createTodo.safeParse(userPayLoad)
if (!parsedPayLoad.success){
    res.status(411).json({
        msg: "The USer Inputs are wrong",
    })
    return;
}
await todo.create({
    title : userPayLoad.title,
    description : userPayLoad.description,
    completed : false
})

res.json ({
    msg : "Todo Created "
})
});



app.get("/todos", async function(req, res){

   const todos = await todo.find({});
  res.json({
    todos
  })

});



app.put("/completed", async function(req, res){

 const taskId = req.body;
 const ParsedTaskId = updateTodo.safeParse(taskId)
 if (!ParsedTaskId.success){
    res.status(400).json({
        msg:"The Id is wrong"
    })
    return;
 }
 await todo.update ({
    _id : req.body.id }, { completed: true
 })

 res.json({
    msg: "Todo Marked as Completed "
 })
});

app.listen(3000);