type SelectionType = any;

const pickRandomly = (
  selectFrom: SelectionType[],
  // Only add currentSelection if you're re-picking and don't want to pick the same thing again
  currentSelection?: SelectionType,
): SelectionType => {
  if (selectFrom.length === 0) {
    throw new Error("No items to pick from");
  }

  const filteredOptions = selectFrom.filter((option) => {
    return option !== currentSelection;
  });

  const randomIndex = Math.floor(Math.random() * filteredOptions.length);
  const randomSelection = filteredOptions[randomIndex];

  return randomSelection;
};

export { pickRandomly };
