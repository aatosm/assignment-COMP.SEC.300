import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { TimeSlot } from './timeslot';

@Entity()
export class Space {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  identifier: string;

  @OneToMany(() => TimeSlot, timeslot => timeslot.space)
  timeslots: TimeSlot[];
}