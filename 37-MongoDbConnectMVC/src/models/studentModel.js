import mongoose from "mongoose"

const studentModel=mongoose.Schema({
    name:{type:String,required:true},
    surname:{type:String,required:true},
    age:{type:Number,required:true},
    isStudent:{type:Boolean,required:true}
},{collection:"Student",timestamps:true})

const student=mongoose.model("Student",studentModel)

export default student