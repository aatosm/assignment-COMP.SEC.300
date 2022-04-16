import { TimeSlot } from "../models/timeslot";

export async function fetchTimeSlots() {
  return await TimeSlot.find();
}