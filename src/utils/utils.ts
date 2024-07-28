export const getRandomBoolean = (): boolean => {
  const randomNumber = Math.random();
  const percentTrue = 0.8;
  return randomNumber >= percentTrue;
};
