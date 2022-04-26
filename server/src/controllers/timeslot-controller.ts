import { Request, Response } from 'express'
import { fetchTimeSlots } from '../services/timeslot-service'

export async function getTimeSlots(req: Request, res: Response) {
  const timeslots = await fetchTimeSlots()
  res.status(200).json(timeslots)
}
