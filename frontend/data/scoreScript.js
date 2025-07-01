const calculateWeeklyScore = (userSelections, gameResults) => {
  const resultMap = new Map(gameResults.map((g) => [g.gameKey, g.winner]));
  const correctSelections = userSelections.reduce((acc, sel) => {
    return sel.team === resultMap.get(sel.gameKey) ? acc + 1 : acc;
  }, 0);
  return {
    correctSelections,
    totalSelections: userSelections.length,
  };
};
