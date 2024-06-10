const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://appureejajayadeep:kfp8Z7ZXucPrQcRC@databaselearning.rehzluk.mongodb.net/");

const todoSchema = mongoose.Schema({

    title: String,
    description : String,
    completed : Boolean 
})

const todo = mongoose.model('todos', todoSchema)

module.exports= {
 todo
}