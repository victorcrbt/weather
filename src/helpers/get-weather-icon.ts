import { stormyWeatherCodes } from '@constants/stormy-weather-codes';
import { drizzlyWeatherCodes } from '@constants/drizzly-weather-codes';
import { rainyWeatherCodes } from '@constants/rainy-weather-codes';
import { snowyWeatherCodes } from '@constants/snowy-weather-codes';
import { hazeWeahterCodes } from '@constants/haze-weather-codes';
import { cloudyWeatherCodes } from '@constants/cloudy-weather-codes';

import RainWeather from '../assets/weather-rain.svg';
import DrizzleWeather from '../assets/weather-drizzle.svg';
import StormyWeather from '../assets/weather-stormy.svg';
import SnowWeather from '../assets/weather-snow.svg';
import CloudyWeather from '../assets/weather-cloudy.svg';
import HazeWeather from '../assets/weather-haze.svg';
import SmokeWeather from '../assets/weather-smoke.svg';
import SquallWeather from '../assets/weather-squall.svg';
import TornadoWeather from '../assets/weather-tornado.svg';
import SunnyWeather from '../assets/weather-sunny.svg';

export function getWeatherIcon({ code }: { code: number }) {
  if (stormyWeatherCodes.includes(code)) {
    return StormyWeather;
  }

  if (drizzlyWeatherCodes.includes(code)) {
    return DrizzleWeather;
  }

  if (rainyWeatherCodes.includes(code)) {
    return RainWeather;
  }

  if (snowyWeatherCodes.includes(code)) {
    return SnowWeather;
  }

  if (hazeWeahterCodes.includes(code)) {
    return HazeWeather;
  }

  if (code === 711) {
    return SmokeWeather;
  }

  if (code === 771) {
    return SquallWeather;
  }

  if (code === 781) {
    return TornadoWeather;
  }

  if (cloudyWeatherCodes.includes(code)) {
    return CloudyWeather;
  }

  return SunnyWeather;
}
