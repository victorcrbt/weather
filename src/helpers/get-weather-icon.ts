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
  switch (code) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232: {
      return StormyWeather;
    }

    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321: {
      return DrizzleWeather;
    }

    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 511:
    case 520:
    case 521:
    case 522:
    case 531: {
      return RainWeather;
    }

    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 613:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622: {
      return SnowWeather;
    }

    case 701:
    case 721:
    case 731:
    case 741: {
      return HazeWeather;
    }

    case 711: {
      return SmokeWeather;
    }

    case 771: {
      return SquallWeather;
    }

    case 781: {
      return TornadoWeather;
    }

    case 801:
    case 802:
    case 803:
    case 804: {
      return CloudyWeather;
    }

    default: {
      return SunnyWeather;
    }
  }
}
