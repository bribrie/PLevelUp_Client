import api from '../index';

export type MasterLoginReqType = {
  [index: string]: string;
  email: string;
  password: string;
};

export type MasterLoginResType = {
  id: number;
  email: string;
  username: string;
  createAt: Date;
  updatedAt: null;
};

export async function masterLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const response = await api.post<MasterLoginResType>(
    `/api/master/auth/login`,
    {
      email,
      password,
    },
  );
  return response.data;
}

export type MasterSignUpReqType = {
  [index: string]: string;
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
};

export async function masterSignUp({
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
  const response = await api.post<MasterLoginResType>(
    `/api/master/auth/signup`,
    {
      email,
      username,
      password,
    },
  );
  return response.data;
}

export type MasterIsLoginResType = {
  id: number;
  email: string;
  username: string;
};

export const masterIsLogin = async () => {
  const response = await api.get<MasterIsLoginResType>(
    '/api/master/auth/islogin',
  );
  return response.data;
};
export type MasterLogoutResType = {};

export const masterLogout = async () => {
  const response = await api.post<MasterLogoutResType>(
    '/api/master/auth/logout',
  );
  return response.data;
};
