type SelectionType = any;

const pickRandomly = (
  selectFrom: SelectionType[],
  // Only add currentSelection if you're re-picking and don't want to pick the same thing again
  currentSelection?: SelectionType,
): SelectionType => {
  if (selectFrom.length === 0) {
    throw new Error("No items to pick from");
  }

  const randomIndex = Math.floor(Math.random() * selectFrom.length);
  const randomSelection = selectFrom[randomIndex];

  if (randomSelection === currentSelection) {
    return pickRandomly(selectFrom, currentSelection);
  }

  return randomSelection;
};

export { pickRandomly };
