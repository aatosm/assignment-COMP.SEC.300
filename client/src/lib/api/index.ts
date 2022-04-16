import client from './client';
import { IRegisterUser, ILoginUser } from '../../types/user';

export async function getTimeSlots() {
  return await client.get(`/api/timeslots`);
}

export async function registerUser(params: IRegisterUser) {
  return await client.post(`/api/users`, params);
}

export async function loginUser(params: ILoginUser) {
  return await client.post(`/auth/login`, params);
}

export async function logOutUser() {
  return await client.post(`/auth/logout`);
}