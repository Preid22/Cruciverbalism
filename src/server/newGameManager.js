function getCrosswordData(date) {
  const [year, month, day] = date.split("-");
  const puzzle = require(`./crosswords/${year}/${month}/${day}.json`);
  let puzzleData = puzzleMap(puzzle);
  return Object.entries(puzzleData);
}

function puzzleMap(input) {
  let trimData = {
    answers: undefined,
    author: undefined,
    clues: undefined,
    copyright: undefined,
    date: undefined,
    editor: undefined,
    grid: undefined,
    gridnums: undefined,
    publisher: undefined,
    size: undefined,
    title: undefined,
  };
  for (let key in trimData) {
    if (Object.keys(input).includes(key)) {
      trimData[key] = input[key];
    }
  }
  return trimData;
}

exports.getCrosswordData = getCrosswordData; // Now by exporting this function we are effectively
// exporting the JSON crossword data as an object available elsewhere
// CONFIRM??
