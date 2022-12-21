function getCrosswordData(date) {                                    //Call this function to get puzzle data
    const [year, month, day] = date.split("-");                      //Creates variables for year, month and day
                                                                     // by destructuring the passed in date which is split
                                                                     // into seperate array elements by the '-' character
    return require(`./crosswords/${year}/${month}/${day}.json`);     // ?? QUESTION: what is the require() function doing here?
                                                                     // My understanding is that it is reading the JSON file and outputting
                                                                     // the data as an object? A little vague on how this occurs need to clarify
}

exports.getCrosswordData = getCrosswordData;                        // Now by exporting this function we are effectively
                                                                    // exporting the JSON crossword data as an object available elsewhere
                                                                    // CONFIRM??
