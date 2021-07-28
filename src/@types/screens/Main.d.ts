declare namespace MainScreen {
  interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
  }

  interface CurrentDay {
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

  interface NextDayProps {
    feels_like: {
      day: number;
      night: number;
      eve: number;
      morn: number;
    };
    moon_phase: number;
    moon_rise: number;
    moonset: number;
    pop: number;
    temp: {
      day: number;
      min: number;
      max: number;
      night: number;
      eve: number;
      morn: number;
    };
  }

  export type NextDay = CurrentDay & NextDayProps;

  interface Location {
    city: string;
    state: string;
    country: string;
  }
}
