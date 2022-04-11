import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Reservation } from './reservation';
import { Space } from './space';

@Entity()
export class TimeSlot {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({type: 'date'})
  startTime: string;

  @Column({type: 'date'})
  endTime: string;

  @ManyToOne(() => Space, space => space.timeslots)
  space: Space;

  @OneToOne(() => Reservation)
  @JoinColumn()
  reservation: Reservation;

  @Column()
  isReserved: boolean;
}