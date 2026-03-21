export function getReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  const lastDigit = minutes % 10;
  const lastTwoDigits = minutes % 100;

  let suffix = 'минут';
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    suffix = 'минут';
  } else if (lastDigit === 1) {
    suffix = 'минута';
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    suffix = 'минуты';
  }

  return `${minutes} ${suffix}`;
}
