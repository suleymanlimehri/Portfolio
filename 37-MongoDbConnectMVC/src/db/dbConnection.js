import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connect success")
}).catch(()=>{
    console.log("Connect not server")
})