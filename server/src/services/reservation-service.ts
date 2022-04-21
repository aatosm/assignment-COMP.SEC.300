import { PostReservationBody } from "../interfaces/reservation.interfaces";
import { Reservation } from "../models/reservation";
import { TimeSlot } from "../models/timeslot";
import { User } from "../models/user";
import { NotFoundError, ReservationFailedError, StatusError } from "../utils/errors";

export async function fetchReservations(id: string) {
  const user = await User.findOne({ 
    where: { id: id },
    relations: ['reservations', 'reservations.timeslot', 'reservations.timeslot.space']
  });
  return user.reservations;
}

export async function createReservation(body: PostReservationBody) {
  const { timeSlotId, userId, text } = body;
  const timeslot = await TimeSlot.findOne({ id: timeSlotId });
  if (!timeslot) {
    throw new NotFoundError('Timeslot was not found.')
  }
  if (timeslot.isReserved) {
    throw new ReservationFailedError('Timeslot is already reserved.')
  }
  timeslot.isReserved = true;
  await timeslot.save();
  const user = await User.findOne({ 
    where: { id: userId },
    relations: ['reservations']
  });
  const reservation = await Reservation.create({
    timeslot,
    text
  }).save();
  user.reservations.push(reservation);
  await user.save();
  return reservation;
}

export async function removeReservation(id: string) {
  const reservation = await Reservation.findOne({ 
    where: { id: id },
    relations: ['timeslot']
  });
  if (!reservation) {
    throw new NotFoundError('Reservation not found.')
  }
  const timeslot = reservation.timeslot;
  timeslot.isReserved = false;
  timeslot.save();
  await reservation.remove();
}