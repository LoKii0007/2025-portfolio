export const getAmplitude = (isMobile: boolean): number => {
  if (typeof window === "undefined") return 0;
  return isMobile
    ? (window.innerHeight / 10) * 2.5
    : (window.innerWidth / 10) * 2.5;
};

export const getFrequency = (index: number, scrollProgress: number): number => {
  return Math.sin(index + 1 + scrollProgress / (360 * 15));
};

export const getTranslateX = (
  isMobile: boolean,
  index: number,
  scrollProgress: number
): number => {
  const amplitude = getAmplitude(isMobile);
  const frequency = getFrequency(index, scrollProgress);
  return amplitude * frequency;
};
