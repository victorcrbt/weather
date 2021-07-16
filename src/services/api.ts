import axios from 'axios';

import { OPEN_WEATHER_API_KEY } from '@configs/api-keys';

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: OPEN_WEATHER_API_KEY,
  },
});
