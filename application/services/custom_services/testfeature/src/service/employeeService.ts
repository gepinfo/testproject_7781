import { Request, Response } from 'express';
import {employeeDao} from '../dao/employeeDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';













let employee = new employeeDao();

export class employeeService {
    
    constructor() { }
    
    public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: Delete')
     let  employeeId = req.params.id;
     employee.Delete(employeeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: Update')
     let  employeeData = req.body;
     employee.Update(employeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: GetEntityById')
     let  employeeId = req.params.id;
     employee.GetEntityById(employeeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: GetAllValues')
     
     employee.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: Create')
     let  employeeData = req.body;
     employee.Create(employeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into employeeService.ts: GetNounCreatedBy')
     let  employeeData = { created_by: req.query.createdby };
     employee.GetNounCreatedBy(employeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from employeeService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}