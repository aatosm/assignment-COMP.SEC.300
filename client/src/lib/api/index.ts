import client from './client';

export async function getTimeSlots() {
  return await client.get(`/api/timeslots`);
}