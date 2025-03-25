import { Api } from '../api';

export const getUser = async (userId) => {
  const data = await Api.get(`/user/${userId}`);
  return data.data;
};
