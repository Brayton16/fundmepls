import {getConnection} from '../database/connection.js';
import emailService from "../services/emailService.js";
import sql from 'mssql';


export const getProyects = async (req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool.request().execute('GetActiveProjects');
        res.json(result.recordset)

    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
};


export const getProyect = async (req, res) =>{
    const {id} = req.body;

    // se verifica si algun campo requerido no se ingreso
    if (
        id == null
    ){ 
        return res.status(400).json({ msg: "Error: Informacion incompleta" });
    }

    try{
        const pool = await getConnection()
        const result = await pool
        .request()
        .input("id", sql.Int, id)
        .execute('GetActiveProjectByid')
    

        if(result.rowsAffected[0] === 0){
            return res.status(404).json({message: "Proyecto no encontrado"}); 
        }

        return res.json(result.recordset[0]);
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const createProyect = async (req, res) =>{
    const {ProjectName, ProjectDescription, FundingGoal, FundingDeadline, MediaURL, Category, OwnerID} = req.body;

        // se verifica si algun campo requerido no se ingreso
        if (
            ProjectName == null || ProjectDescription == null || FundingGoal == null || FundingDeadline == null 
            || MediaURL == null || Category == null || OwnerID == null
        ){ 
            return res.status(400).json({ msg: "Error: Informacion incompleta" });
        }
        
    try{
        const pool = await getConnection()
        const result = await pool.request()
        .input("ProjectName", sql.NVarChar, ProjectName)
        .input("ProjectDescription", sql.NVarChar, ProjectDescription)
        .input("FundingGoal", sql.Decimal, FundingGoal)
        .input("FundingDeadline", sql.DateTime, FundingDeadline)
        .input("MediaURL", sql.NVarChar, MediaURL)
        .input("Category", sql.NVarChar, Category)
        .input("OwnerID", sql.Int, OwnerID)
        .output("FirstName" , sql.NVarChar)
        .output("Email", sql.VarChar)
        .execute('InsertProject')

        let firstName  = result.output.FirstName;
        let email = result.output.Email;

        // envia correo de registro de proyecto
        await emailService.sendRegisterProyect({ProjectName, email, firstName});
    
        return res.status(201).json({
            message: "Proyecto registrado exitosamente.",
            firstName,
            email, 
            ProjectName
        });
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const updateProyect = async (req, res) =>{
    const {ProjectName, ProjectDescription, FundingGoal, FundingDeadline
        , MediaURL, Category, idProyect} = req.body;

    // se verifica si algun campo requerido no se ingreso
    if (
        idProyect == null
    ){ 
        return res.status(400).json({ msg: "Error: Informacion incompleta" });
    }

    try{
        const pool = await getConnection()
    
        const result = await pool.request()
        .input("ProjectID", sql.Int, idProyect)
        .input("ProjectName", sql.NVarChar, ProjectName)
        .input("ProjectDescription", sql.NVarChar, ProjectDescription)
        .input("FundingGoal", sql.Decimal, FundingGoal)
        .input("FundingDeadline", sql.DateTime, FundingDeadline)
        .input("MediaURL", sql.NVarChar, MediaURL)
        .input("Category", sql.NVarChar, Category)
        .output("FirstName" , sql.NVarChar)
        .output("Email", sql.VarChar)
        .execute('updateProyect')

        let firstName  = result.output.FirstName;
        let email = result.output.Email;

        // envia correo de registro de proyecto
        await emailService.sendUpdateProyect({ProjectName, email, firstName});
            
        return res.status(201).json({
            message: "Proyecto modificado exitosamente.",
            firstName,
            email, 
            ProjectName
        });
    }
    catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const deleteProyect = async (req, res) =>{
    const {id} = req.body;

    // se verifica si algun campo requerido no se ingreso
    if (
        id == null
    ){ 
        return res.status(400).json({ msg: "Error: Informacion incompleta" });
    }

    try{
        const pool = await getConnection()
        const result = await pool
        .request()
        .input("id", sql.Int, id)
        .execute('DeactivateProject')

        if(result.rowsAffected[0] === 0){
            return res.status(404).json({message: "Proyecto no encontrado"});
        }

        return res.json({message: "Proyecto eliminado correctamente"});
    }
    catch(error){        
        res.status(500);
        res.send(error.message);
    }
};