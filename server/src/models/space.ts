import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { TimeSlot } from './timeslot';

@Entity()
export class Space extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  identifier: string;

  @OneToMany(() => TimeSlot, timeslot => timeslot.space)
  timeslots: TimeSlot[];
}