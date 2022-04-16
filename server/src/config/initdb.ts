import { Space } from "../models/space";
import { TimeSlot } from "../models/timeslot";
import { User } from "../models/user";
import { hashPassword } from "../services/user-service"

export async function initDatabase() {
  
  await User.create({
    email: 'testi@test.com',
    name: 'Testi Testinen',
    password: await hashPassword('pw')
  }).save();

  await User.create({
    email: 'testi2@test.com',
    name: 'Testi Testinen',
    password: await hashPassword('pw')
  }).save();

  const space1 = await Space.create({
    identifier: 'Reservation Space 1',
    timeslots: []
  }).save();

  const space2 = await Space.create({
    identifier: 'Reservation Space 2',
    timeslots: []
  }).save();

  await TimeSlot.create({
    startTime: new Date(2022, 4, 1, 8),
    space: space1
  }).save();

  await TimeSlot.create({
    startTime: new Date(2022, 4, 1, 9),
    space: space1
  }).save();

  await TimeSlot.create({
    startTime: new Date(2022, 4, 1, 10),
    space: space1
  }).save();

  await TimeSlot.create({
    startTime: new Date(2022, 4, 1, 11),
    space: space2
  }).save();

  await TimeSlot.create({
    startTime: new Date(2022, 4, 1, 12),
    space: space2
  }).save();

  
}
