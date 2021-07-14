export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface CurrentDay {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  rain: {
    [key: string]: number;
  };
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}
