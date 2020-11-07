import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm';
import Image from './Image';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  cpf: string;

  @Column()
  postal_code: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @OneToMany(() => Image, image => image.user, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'user_id' })
  images: Image[];
};