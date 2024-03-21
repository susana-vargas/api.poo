import { Request, Response } from 'express';

export class GetUserController {
  users = [
    { id: 1, name: 'fatima', age: 25, hobby: 'teatro', isAlive: true },
    { id: 2, name: 'maria', age: 25, hobby: 'costura', isAlive: true },
    { id: 3, name: 'isack', age: 20, hobby: 'deportes', isAlive: true },
  ];

  getAll(req: Request, res: Response): void {
    res.json(this.users);
  }

  public addUser(newUser: any) {
    this.users.push(newUser);
  }

  public getId(req: Request, res: Response) {
    const userId = parseInt(req.params.id);
    const user = this.users.find(user => user.id === userId);

    res.json(user);
  }
}