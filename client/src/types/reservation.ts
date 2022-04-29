import { ITimeSlot } from './timeslot'

export interface IPostReservation {
  timeSlotId: string
  userId: string
  text: string
}

export interface IReservation {
  id: string
  timeslot: ITimeSlot
  text: string
}
