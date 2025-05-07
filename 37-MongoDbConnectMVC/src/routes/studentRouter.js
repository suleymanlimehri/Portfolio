import express from "express";
import { addStudent, deletedStudent, getByIdStudent, getStudent, updatedStudent } from "../controllers/studentController.js";
const StudentRouter=express.Router()


StudentRouter.post("/",addStudent)
StudentRouter.get("/",getStudent)
StudentRouter.get("/:id",getByIdStudent)
StudentRouter.delete("/:id",deletedStudent)
StudentRouter.put("/:id",updatedStudent)

export default StudentRouter