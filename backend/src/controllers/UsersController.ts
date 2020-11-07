import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import userView from '../views/users_view';
import User from '../models/User'; 

export default {
  async index(request: Request, response: Response) {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find({
      relations: ['images']
    });

    return response.json(users); 
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOneOrFail(id, {
      relations: ['images']
    });

    return response.json(userView.render(user));
  },

  async create(request: Request, response: Response) {
    const { 
    name,
    email,
    password,
    cpf,
    postal_code,
    neighborhood,
    street,
   } = request.body;

  const usersRepository = getRepository(User);

  const requestImages = request.files as Express.Multer.File[];
  const images = requestImages.map(image => {
    return { path: image.filename }
  })

  const user = usersRepository.create({
    name,
    email,
    password,
    cpf,
    postal_code,
    neighborhood,
    street,
    images
  });

  await usersRepository.save(user);
  return response.status(201).json(user);
  }
};