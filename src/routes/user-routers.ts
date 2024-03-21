import { Router } from 'express';
import { GetUserController } from '../controllers/get-user.controller';
import PostUserController from '../controllers/post-user.controller';


const router = Router();
const getUserController = new GetUserController();

router.get('/', getUserController.getAll.bind(getUserController));
router.get('/:id', getUserController.getId.bind(getUserController));

const postUserController = new PostUserController(getUserController);
router.post('/', postUserController.create.bind(postUserController));

export default router;