export function formatTemperature({ temp }: { temp: number }) {
  return `${Math.round(temp)}°`;
}
