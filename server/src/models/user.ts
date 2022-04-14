import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { UserData } from '../interfaces/user.interfaces';
import { Reservation } from './reservation';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column({
    nullable: true
  })
  password?: string;

  @OneToMany(() => Reservation, reservation => reservation.user)
  reservations: Reservation[];

  toUserData(): UserData {
    return {
      id: this.id,
      email: this.email,
      name: this.name
    };
  }
}