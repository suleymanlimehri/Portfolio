import student from "../models/studentModel.js";


export const addStudent=async(req,res)=>{
    try {
        let newStudent=new student(req.body)
        await newStudent.save()
        res.status(201).send({message:"create new student",data:newStudent})
    } catch (error) {
        res.status(500).send("server error")
    }
}

export const getStudent=async(req,res)=>{
    try {
        let students=await student.find()
        res.status(200).send({message:"create new student",students})
    } catch (error) {
        res.status(500).send("server error")
    }
}
export const getByIdStudent=async(req,res)=>{
    let {id}=req.params
    try {
        let Findstudents=await student.findById(id)
        if(!Findstudents){
            res.status(404).send("student not found")
        }
        res.status(200).send({Findstudents})
    } catch (error) {
        res.status(500).send("server error")
    }
}
export const updatedStudent=async(req,res)=>{
    let {id}=req.params
    try {
        let newStudent=req.body
        let Updatedstudents=await student.findByIdAndUpdate(id,newStudent)
        if(!Updatedstudents){
            res.status(400).send("student not updated")
        }
        res.status(200).send({message:"product updated success",Updatedstudents})
    } catch (error) {
        res.status(500).send("server error")
    }
}
export const deletedStudent=async(req,res)=>{
    let {id}=req.params
    try {
        let deletedstudents=await student.findByIdAndDelete(id)
        if(!deletedstudents){
            res.status(404).send("student not deleted")
        }
        res.status(200).send({deletedstudents})
    } catch (error) {
        res.status(500).send("server error")
    }
}