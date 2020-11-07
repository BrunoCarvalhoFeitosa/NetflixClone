import User from '../models/User';
import imagesView from '../views/images_view';

export default {
  render (user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      cpf: user.cpf,
      postal_code: user.password,
      neighborhood: user.neighborhood,
      street: user.street,
      images: imagesView.renderMany(user.images),
    };
  }
};