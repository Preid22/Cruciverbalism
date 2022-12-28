                    ** PROJECT NOTES **
                    <<<<<<<<<<>>>>>>>>>>

12/28/2022
----------
- First entry, will start out with a basic project overview. Mainly this will
serve as a way to track my current progress and identify blocks, possible solutions,
and issues resolved.

*** GOAL:
    Complete a capstone project to demonstrate capability and understanding of basic front
and backend systems and technology

* PROJECT DETAILS: Will be building a crossword app using the NYT online crossword
(https://www.nytimes.com/crosswords) as a template.
    - The app will allow for single player play as well as multiplayer which will
have both competetive and cooperative modes.
    - Puzzles will be generated using a DB of json files containing historical NYT puzzle data
    - Player profiles may be created, saved, and updated with relevant data
    - ?? Games will be played 'live' or on a turn based system
    - Game components (board/grid, hints) will be generated using the historical data and can be
  user selected by date
  (?? puzzle search function ??)
---------------------------------------------------------------------------------------------------

* Current status: Spent most of my time last week going back over the /server/index.js file and 
getting things cleared up there. Feels like I do have a better handle on that but it did shine
a light on some areas I need to get more exposure to. After getting a little more up to speed on
that stuff I turned my attention to the actual puzzle data and how to work with that in the 
context of the app. Currently working on how to massage the data - remove items I dont need and 
get the relevant data organized/formatted in a suitable way that can be output in the app.

* Blocks/Challenges: Going back and reviewing Objects and working with them. Feel pretty good 
about the basics of accessing and updating/modifying properties but am struggling to implement a function
that cleans up the json puzzle data. 

    - Current approach: create an Object with the keys I want to use (clues, author, gridnums, etc), then
compare that to the historical data json file and if the keys from the new obj are found, update the vals
on the 'new' object with the vals from the historical data.

    - Attempted solutions: Tried a couple different variations on loops, both for in and for of. Was unsuccesful,
seemed to be able to iterate through just fine but wasn't able to update the values like I wanted to.

** EXPAND ON ATTEMPTED SOLUTIONS

** PUT CODE HERE FOR REF **

    - Next step: try applying .map() or .forEach() methods, think about how to do this