import axios from 'axios';

import { API_KEY } from '@configs/api-key';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: API_KEY,
  },
});
