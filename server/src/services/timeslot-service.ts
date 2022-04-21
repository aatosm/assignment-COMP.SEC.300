import { TimeSlot } from "../models/timeslot";

export async function fetchTimeSlots() {
  return await TimeSlot.find({ 
    where: { isReserved: false },
    relations: ['space']
  });
}