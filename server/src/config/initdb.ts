import { Space } from '../models/space'
import { TimeSlot } from '../models/timeslot'

export async function initDatabase() {
  const timeslot = await TimeSlot.create({
    startTime: new Date(2022, 6, 2, 8),
  }).save()

  const timeslot2 = await TimeSlot.create({
    startTime: new Date(2022, 6, 2, 9),
  }).save()

  const timeslot3 = await TimeSlot.create({
    startTime: new Date(2022, 6, 2, 10),
  }).save()

  const timeslot4 = await TimeSlot.create({
    startTime: new Date(2022, 6, 2, 11),
  }).save()

  const timeslot5 = await TimeSlot.create({
    startTime: new Date(2022, 6, 2, 12),
  }).save()

  await Space.create({
    identifier: 'Reservation Space 1',
    timeslots: [timeslot, timeslot2, timeslot3],
  }).save()

  await Space.create({
    identifier: 'Reservation Space 2',
    timeslots: [timeslot4, timeslot5],
  }).save()
}
