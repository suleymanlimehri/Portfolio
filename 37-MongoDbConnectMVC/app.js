import express from "express"
import "dotenv/config"
import "./src/db/dbConnection.js"
import StudentRouter from "./src/routes/studentRouter.js"

const app=express()
app.use(express.json())

//post
app.use("/api/students",StudentRouter)


const port=process.env.PORT||3001

app.get("/",(req,res)=>{
    res.send("af108")
})

app.listen(port,()=>{
    console.log(`Server is running ${`http://localhost:${port}`}`)
})
