import type { CurrentDay } from './CurrentDay';

interface NextDayProps {
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  }
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
  }
}

export type NextDay = CurrentDay & NextDayProps;
