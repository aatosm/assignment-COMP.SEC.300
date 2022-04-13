import { Entity, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { TimeSlot } from './timeslot';
import { User } from './user';

@Entity()
export class Reservation extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => User, user => user.reservations)
  user: User;

  @OneToOne(() => TimeSlot)
  @JoinColumn()
  timeslot: TimeSlot
}