import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  BaseEntity,
  Column,
} from 'typeorm'
import { TimeSlot } from './timeslot'
import { User } from './user'

@Entity()
export class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => User, (user) => user.reservations, {
    onDelete: 'CASCADE',
  })
  user: User

  @OneToOne(() => TimeSlot, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  timeslot: TimeSlot

  @Column('text', { default: '' })
  text: string
}
