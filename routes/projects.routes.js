import { Router } from "express";
import {getProyects, getProyect, createProyect, updateProyect, deleteProyect}  from "../models/projects.models.js";

const router = Router();

router.get('/proyectos', getProyects);

router.get('/proyecto', getProyect);

router.post('/proyecto', createProyect);

router.put('/proyecto', updateProyect);

router.delete('/proyecto', deleteProyect);


export default router;