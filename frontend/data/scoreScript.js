export const calculateWeeklyScore = (userSelections, gameResults) => {
  const winners = gameResults.winners;
  const resultMap = new Map(winners.map((g) => [g.gameKey, g.team]));
  const correctSelections = userSelections.selections[0].selections.reduce(
    (acc, sel) => {
      return sel.team === resultMap.get(sel.gameKey) ? acc + 1 : acc;
    },
    0
  );
  console.log("correct selections: " + correctSelections);
  console.log(
    "total selections: " + userSelections.selections[0].selections.length
  );
  return {
    userId: userSelections.selections[0].userId,
    week: userSelections.selections[0].week,
    correctSelections,
    totalSelections: userSelections.selections[0].selections.length,
  };
};
