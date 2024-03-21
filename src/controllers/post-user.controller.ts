import { Request, Response } from 'express';
import { GetUserController } from './get-user.controller';

export class PostUserController {
  getUserController: GetUserController;

  constructor(getUserController: GetUserController) {
    this.getUserController = getUserController;
  }

  public create(req: Request, res: Response): void {
    const { id, name, age, hobby, isAlive} = req.body;
    const newUser = {id,name, age, hobby, isAlive};

    this.getUserController.addUser(newUser);
    res.json({message: 'controllerPOST'})
    console.log(newUser, 'controllerPOST');   
  }
}

export default PostUserController;