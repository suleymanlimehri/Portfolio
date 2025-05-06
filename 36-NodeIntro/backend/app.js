import express from "express"
import fs from "fs"
const app=express()
const port=3000

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("mehriiisssxmxxmmxxmxmmxm")
})


let {student}=JSON.parse(fs.readFileSync("db.json"))

app.get("/api/student",(req,res)=>{
    try {
        res.status(200).send({message:"success",data:student})
    } catch (error) {
        res.status(500).send({message:"server error"})
    }
})

app.get("/api/student/:id",(req,res)=>{
    try {
        let {id}=req.params
        const findUser=student.find((user)=>user.id==id)

        console.log(findUser)
        if(!findUser){
            res.status(404).send({message:"user not found"})
        }
        res.status(200).send({message:"success",data:findUser})  
    } catch (error) {
        res.status(500).send({message:"server error"})
    }
})

app.post("/api/student",(req,res)=>{
    try {
        const newUser=req.body
        if(!newUser.name&& !newUser.age && !newUser.surname){
            return res.status(404).send({message:"Bad request"})
        }
        student.push({id:Date.now(),...newUser})
        fs.writeFileSync("db.json",JSON.stringify({student}))
        res.status(200).send({message:"user created"})

    } catch (error) {
        res.status(500).send({message:"server error"})
    }
})

app.delete("/api/student/:id",(req,res)=>{
    let {id}=req.params

    try {
        let studentIndex=student.findIndex((i)=>i.id==id)

        if(studentIndex==-1){
            res.status(404).send({message:"Student not found"})
        }

        student.splice(studentIndex,1)
        fs.writeFileSync("db.json",JSON.stringify({student}))
        res.status(200).send({message:"user deleted successfuly"})

    } catch (error) {
        res.status(500).send({message:"server error"})
        
    }
})

app.put("/api/student/:id",(req,res)=>{
    let {id}=req.params
    try {
        let updatedStudent=req.body
        console.log(updatedStudent)
        let studentIndex=student.findIndex((i)=>i.id==id)

        if(studentIndex==-1){
            res.status(404).send({message:"Student not found"})
        }
        student[studentIndex]={id,...updatedStudent}
        fs.writeFileSync("db.json",JSON.stringify({student}))

        res.status(200).send({message:"user updated successfully",data:updatedStudent})
    } catch (error) {
        res.status(500).send({message:"server error"})
    }
})
app.patch("/api/student/:id",(req,res)=>{
    let {id}=req.params
    try {
        let updatedStudent=req.body
        console.log(updatedStudent)
        let studentIndex=student.findIndex((i)=>i.id==id)

        if(studentIndex==-1){
            res.status(404).send({message:"Student not found"})
        }
        student[studentIndex]={...student[studentIndex],...updatedStudent}
        fs.writeFileSync("db.json",JSON.stringify({student}))

        res.status(200).send({message:"user updated successfully",data:student[studentIndex]})
    } catch (error) {
        res.status(500).send({message:"server error"})
    }
})
app.listen(port,()=>{
    console.log(`server is running ${`http://localhost:${port}/`}`)
})

