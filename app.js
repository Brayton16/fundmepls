import express from 'express'
import usersRoutes from "./routes/users.routes.js"; 
import projectsRoutes from './routes/projects.routes.js'

const app = express();

app.use(express.json());
app.use(usersRoutes);
app.use(projectsRoutes);
 
app.listen(3000)
console.log("Servidor iniciado")  