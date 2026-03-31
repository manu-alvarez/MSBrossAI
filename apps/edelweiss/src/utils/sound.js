// Sound utilities for VisionPlay
// Small click and success sounds encoded as base64 data URLs

const CLICK_SOUND = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";
const SUCCESS_SOUND = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";

export function playClick() {
  const audio = new Audio(CLICK_SOUND);
  audio.volume = 0.3;
  audio.play().catch(e => console.warn('Click sound failed:', e));
}

export function playSuccess() {
  const audio = new Audio(SUCCESS_SOUND);
  audio.volume = 0.5;
  audio.play().catch(e => console.warn('Success sound failed:', e));
}