export function vibrate(duration = 50) {
  if ('vibrate' in navigator.navigator) {
    // Some browsers have navigator.vibrate
    navigator.vibrate(duration);
  } else if ('vibrate' in navigator) {
    navigator.vibrate(duration);
  }
}