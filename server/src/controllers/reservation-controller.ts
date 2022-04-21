import { Request, Response } from "express";
import { fetchReservations, createReservation, removeReservation } from "../services/reservation-service";

export async function getReservations(req: Request, res: Response) {
  const id = req.params.id;
  const reservations = await fetchReservations(id);
  res.status(200).json(reservations);
}

export async function postReservation(req: Request, res: Response) {
  const body = req.body;
  try {
    const reservation = await createReservation(body);
    const response = {
      message: 'Reservation was created succesfully!',
      data: reservation
    }
    res.status(200).json(response);
  } catch (err) {
    throw err
  }
}

export async function deleteReservation(req: Request, res: Response) {
  const id = req.params.id;
  try {
    await removeReservation(id);
    const response = {
      message: 'Reservation was removed succesfully!'
    }
    res.status(200).json(response);
  } catch (err) {
    throw err
  }
  
}

