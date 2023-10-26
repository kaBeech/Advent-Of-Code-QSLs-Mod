// deno-lint-ignore no-explicit-any
const pickRandomly = (selectFrom: any[]) => {
  const randomIndex = Math.floor(Math.random() * selectFrom.length);
  return selectFrom[randomIndex];
};

export { pickRandomly };
