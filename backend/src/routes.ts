import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import UsersController from './controllers/UsersController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/users/login', UsersController.index);
routes.get('/user/:id', UsersController.show);
routes.post('/users/create', upload.array('images'), UsersController.create);

export default routes;