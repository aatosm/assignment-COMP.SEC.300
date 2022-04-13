import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Reservation } from './reservation';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @OneToMany(() => Reservation, reservation => reservation.user)
  reservations: Reservation[];
}