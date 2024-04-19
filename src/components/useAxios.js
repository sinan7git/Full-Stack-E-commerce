import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { UserContext } from '../App';

const baseURL = 'http://127.0.0.1:8000/';

const useAxios = () => {
  const { userData, setUserData } = useContext(UserContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${userData?.access}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwt_decode(userData.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    try {
      const response = await axios.post(`${baseURL}/api/v1/auth/token/refresh/`, {
        refresh: userData.refresh,
      });
      const newAccessToken = response.data.access;

      localStorage.setItem('user_data', JSON.stringify({ ...userData, access: newAccessToken }));
      setUserData({ ...userData, access: newAccessToken });

      req.headers.Authorization = `Bearer ${newAccessToken}`;
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      throw error;
    }

    return req;
  });

  return axiosInstance;
};

export default useAxios;
