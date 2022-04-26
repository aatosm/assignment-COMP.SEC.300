import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm'
import { Reservation } from './reservation'
import { Space } from './space'

@Entity()
export class TimeSlot extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  startTime: Date

  @ManyToOne(() => Space, (space) => space.timeslots, {
    onDelete: 'CASCADE',
  })
  space: Space

  @OneToOne(() => Reservation)
  @JoinColumn()
  reservation?: Reservation

  @Column('boolean', { default: false })
  isReserved: boolean
}
