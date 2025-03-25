import { Api } from '../../api';

export const getUserPlan = async (userId) => {
  const data = await Api.get(`/user/${userId}/plan`);
  return data.data;
};
