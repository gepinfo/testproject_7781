import * as mongoose from 'mongoose';
import employeeModel from '../models/daomodels/employee';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class employeeDao {
    private employee = employeeModel;

    

    constructor() { }
    
    public async Delete(employeeId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: Delete');

    

    
    
    
    this.employee.findByIdAndRemove(employeeId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(employeeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: Update');

    

    
    
    
    this.employee.findOneAndUpdate({ _id: employeeData._id }, employeeData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetEntityById(employeeId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GetEntityById');

    

    
    
    
    this.employee.findById(employeeId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GetAllValues');

    

    
    
    
    this.employee.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(employeeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: Create');

    let temp = new employeeModel(employeeData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(employeeData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into employeeDao.ts: GetNounCreatedBy');

    

    
    
    
    this.employee.aggregate(([
                        { $match: { $and: [{ created_by: employeeData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from employeeDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}