export interface ITimeSlot {
  id: string
  startTime: string
  isReserved: boolean
  space: ISpace
}

export interface ISpace {
  identifier: string
}
