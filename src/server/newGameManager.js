function getCrosswordData(date) {
  // Call this function to get puzzle data
  const [year, month, day] = date.split("-"); // Creates variables for year, month and day
  // by destructuring the passed in date which is split
  // into seperate array elements by the '-' character
  const puzzle = require(`./crosswords/${year}/${month}/${day}.json`); // ?? QUESTION: what is the require() function doing here?

  return puzzleMap(puzzle); // My understanding is that it is reading the JSON file and outputting
  // the data as an object? A little vague on how this occurs need to clarify

  // Make a mapping function to parse the data into a usable format
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
