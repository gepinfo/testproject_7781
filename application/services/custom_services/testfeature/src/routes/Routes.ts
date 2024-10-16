import { Request, Response, NextFunction } from "express";
import { employeeController } from '../controller/employeeController';


export class Routes {
    private employee: employeeController = new employeeController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/employee/:id').delete(this.employee.Delete);
app.route('/employee').put(this.employee.Update);
app.route('/employee/:id').get(this.employee.GetEntityById);
app.route('/employee').get(this.employee.GetAllValues);
app.route('/employee').post(this.employee.Create);
app.route('/employee/userid/created_by').get(this.employee.GetNounCreatedBy);
     }

}