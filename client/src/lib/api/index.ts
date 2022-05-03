import client from './client'
import { IRegisterUser, ILoginUser } from '../../types/user'
import { IPostReservation } from '../../types/reservation'

export async function getTimeSlots() {
  return await client.get(`/api/timeslots`)
}

export async function registerUser(params: IRegisterUser) {
  return await client.post(`/api/users`, params)
}

export async function loginUser(params: ILoginUser) {
  return await client.post(`/auth/login`, params)
}

export async function logOutUser() {
  return await client.post(`/auth/logout`)
}

export async function getLoginState() {
  return await client.get(`/auth/login-state`)
}

export async function getReservations(userId: string) {
  return await client.get(`api/reservations/${userId}`)
}

export async function postReservation(params: IPostReservation) {
  return await client.post(`/api/reservations`, params)
}

export async function deleteReservation(reservationId: string) {
  return await client.delete(`/api/reservations/${reservationId}`)
}
