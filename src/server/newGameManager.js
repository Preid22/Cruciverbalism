function getCrosswordData(date) {
  const [year, month, day] = date.split("-");
  const puzzle = require(`./crosswords/${year}/${month}/${day}.json`);
  return puzzleMap(puzzle);
}
//board has access to these \/
function puzzleMap(puzzle) {
  const p = {};
  p.answers = puzzle.answers;
  p.author = puzzle.author;
  p.size = puzzle.size;
  // p.clues = puzzle.clues;
  p.acrossCluesArr = generateClueArray(puzzle.clues.across);
  p.downCluesArr = generateClueArray(puzzle.clues.down);
  p.acrossCluesMap = generateClueMap(puzzle.clues.across);
  p.downCluesMap = generateClueMap(puzzle.clues.down);
  p.copyright = puzzle.copyright;
  p.date = puzzle.date;
  p.editor = puzzle.editor;
  p.cells = generateCells(puzzle.grid, puzzle.size.rows);
  /*generateCells outputs:
[ 
  { letter: 'H', row: 0, column: 0 },
  { letter: 'A', row: 0, column: 1 },
  { letter: 'R', row: 0, column: 2 },
  { letter: 'E', row: 0, column: 3 },
  { letter: '.', row: 0, column: 4 },
  { letter: 'R', row: 0, column: 5 },
  { letter: 'U', row: 0, column: 6 },
  { letter: 'I', row: 0, column: 7 },
  { letter: 'N', row: 0, column: 8 },
  { letter: 'G', row: 0, column: 9 },
  { letter: '.', row: 0, column: 10 },
 ]
*/
  p.gridnums = puzzle.gridnums;
  p.publisher = puzzle.publisher;
  p.size = puzzle.size;
  p.title = puzzle.title;
  return p;
}

function generateClueArray(clues) {
  return clues.map((clue) => {
    const [num, clueString] = clue.split(".");
    return {
      num,
      clueString,
    };
  });
}

function generateClueMap(clues) {
  return clues.reduce((accum, cur) => {
    const [num, clueString] = cur.split(".");
    accum[num] = clueString;
    return accum;
  }, {});
}
//ln.20
function generateCells(letters, size) {
  return letters.map((letter, index) => {
    const row = Math.floor(index / size); //on first row index is < size, > on subsequent rows so dividing gets us row value
    const column = index % size;
    const letterOb = {};
    letterOb.letter = letter;
    letterOb.row = row;
    letterOb.column = column;
    return letterOb;
  });
}

exports.getCrosswordData = getCrosswordData; // Now by exporting this function we are effectively
// exporting the JSON crossword data as an object available elsewhere
// CONFIRM??
