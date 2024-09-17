import { Router } from "express";
import {getProyects, getProyect, createProyect, updateProyect, deleteProyect, getProyectsByCategory, getProyectsByLimitDate, getProyectsByFundingGoal, getProyectsByCollection}  from "../models/projects.models.js";

const router = Router();

router.get('/proyectos', getProyects);

router.get('/proyectos/categoria', getProyectsByCategory);
router.get('/proyectos/objetivo', getProyectsByFundingGoal);
router.get('/proyectos/recaudado', getProyectsByCollection);
router.get('/proyectos/fechaLimite', getProyectsByLimitDate);

router.get('/proyecto', getProyect);

router.post('/proyecto', createProyect);

router.put('/proyecto', updateProyect);

router.delete('/proyecto', deleteProyect);


export default router;