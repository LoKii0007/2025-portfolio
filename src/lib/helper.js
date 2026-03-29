export const getAmplitude = (isMobile) => {
  return isMobile
    ? (window.innerHeight / 10) * 2.5
    : (window.innerWidth / 10) * 2.5;
};

export const getFrequency = (index, scrollProgress) => {
  return Math.sin(index + 1 + scrollProgress / (360 * 15));
};

export const getTranslateX = (isMobile, index, scrollProgress) => {
  const amplitude = getAmplitude(isMobile);
  const frequency = getFrequency(index, scrollProgress);
  return amplitude * frequency;
};
