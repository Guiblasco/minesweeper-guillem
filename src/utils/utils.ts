export const getRandomBoolean = (): boolean => {
  const randomNumber = Math.random();
  const percentTrue = 0.5;

  return randomNumber >= percentTrue;
};
