import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reservation } from './reservation';

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  accountType: string;

  @OneToMany(() => Reservation, reservation => reservation.user)
  reservations: Reservation[];
}