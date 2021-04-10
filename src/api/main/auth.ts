import api from '../index';

export type MainLoginReqType = {
  [index: string]: string;
  email: string;
  password: string;
};

export type MainLoginResType = {
  id: number;
  email: string;
  username: string;
  createAd: Date;
  updatedAt: null;
};

export async function mainLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await api.post<MainLoginResType>(`/api/main/auth/login`, {
    email,
    password,
  });
  return response.data;
}

export type MainSignUpReqType = {
  [index: string]: string;
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
};

export async function mainSignUp({
  email,
  username,
  password,
  passwordConfirm,
}: {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}) {
  const response = await api.post<MainLoginResType>(`/api/main/auth/sign-up`, {
    email,
    username,
    password,
  });
  return response.data;
}

export type MainIsLoginResType = {
  _id: number;
  email: string;
};

export const mainIsLogin = async () =>
  await api.get<MainIsLoginResType>('/api/main/auth/is-login');

export type MainLogoutResType = {};

export const mainLogout = async () =>
  await api.post<MainLogoutResType>('/api/main/auth/logout');
