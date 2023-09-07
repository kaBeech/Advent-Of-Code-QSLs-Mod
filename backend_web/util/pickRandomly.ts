// deno-lint-ignore no-explicit-any
const pickRandomly = (options: any[]) => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

export { pickRandomly };
