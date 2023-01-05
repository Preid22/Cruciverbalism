                    ** PROJECT NOTES **
                    <<<<<<<<<<>>>>>>>>>>

## 12/28/2022

- First entry, will start out with a basic project overview. Mainly this will
  serve as a way to track my current progress and identify blocks, possible solutions,
  and issues resolved.

\*\*\* GOAL:
Complete a capstone project to demonstrate capability and understanding of basic front
and backend systems and technology

- PROJECT DETAILS: Will be building a crossword app using the NYT online crossword
  (https://www.nytimes.com/crosswords) as a template. - The app will allow for single player play as well as multiplayer which will
  have both competetive and cooperative modes. - Puzzles will be generated using a DB of json files containing historical NYT puzzle data - Player profiles may be created, saved, and updated with relevant data - ?? Games will be played 'live' or on a turn based system - Game components (board/grid, hints) will be generated using the historical data and can be
  user selected by date
  (?? puzzle search function ??)

---

- Current status: Spent most of my time last week going back over the /server/index.js file and
  getting things cleared up there. Feels like I do have a better handle on that but it did shine
  a light on some areas I need to get more exposure to. After getting a little more up to speed on
  that stuff I turned my attention to the actual puzzle data and how to work with that in the
  context of the app. Currently working on how to massage the data - remove items I dont need and
  get the relevant data organized/formatted in a suitable way that can be output in the app.

- Blocks/Challenges: Going back and reviewing Objects and working with them. Feel pretty good
  about the basics of accessing and updating/modifying properties but am struggling to implement a function
  that cleans up the json puzzle data.

      - Current approach: create an Object with the keys I want to use (clues, author, gridnums, etc), then

  compare that to the historical data json file and if the keys from the new obj are found, update the vals
  on the 'new' object with the vals from the historical data.

      - Attempted solutions: Tried a couple different variations on loops, both for in and for of. Was unsuccesful,

  seemed to be able to iterate through just fine but wasn't able to update the values like I wanted to.

\*\* EXPAND ON ATTEMPTED SOLUTIONS

** PUT CODE HERE FOR REF **

    - Next step: try applying .map() or .forEach() methods, think about how to do this

## 12/29/2022

🚨 Foothold alert 🚨

- Update: was able to successfuly iterate thru 'newData' object and pull the corresponding vals
  from the NYT 'data' object

function massage(input, output) {
for (let key in output) {
if (Object.keys(data).includes(key)) {
output[key] = input[key];
} // ternary
}
return output; <------ Outputs newData with updated vals
}

console.log(massage(data, newData));

## 1/1/2023

- Coming back after a few days unplugged, getting my bearings back. Left feeling pretty good about
  having been able to handle and modify the CW data objects as a stopping point last week. Small piece
  of the big picture though, maintain perspective.

* Now the challenge is to get ahold of my data and use it to render relevant game data
  - useState, dependancy array, figure out what the deal is with renders and re-renders
  - Properly handle the data
  - Render that data!!

## 1/2/2023

- Main goal tonight is to get data on the board. Thinking to try and get the author name or something rendered.
  Left off with some doubt that the data was making it into the state object or if so what the format to access it
  would be. Goals tonight are to get a better sense of what the data looks like and also to be able to access
  it through hooks.

- Trouble spots:
  - spinning my wheels on useState & useEffect and how they work with rendering data. Need to tighten up on this.
  - I think I should be able to access board (the state variable) using dot notation to access CW data but am
    unable to do so
  - When this URL is typed in - ( http://localhost:3000/creategame?date=1979-10-10 ), the page displays the raw data object

* Relevant info: - the .json() method does not produce JSON data, rather it takes in JSON, parses it, and produces a JS object - Dependency array: Certain React hooks accept two args. The first is the callback function and the second
  is the DEPENDENCY ARRAY. The dependency array tells the hook to trigger anytime the dependency array changes
  _EXAMPLE_:

       useEffect(() => {
          console.log('Counter has value', counter);
       }, [counter]);

       ^^ Here, [counter] is the dependency array and the callback function will be run anytime that the 'counter'
       variable changes

  - require(): Require is a built-in function to include external modules that exist in seperate files. Require reads
    a JS file, executes it, and proceeds to return the export object

- Debrief:
  - Was unable to render anything in the app but feels like I got a couple steps closer. Was able to confirm the data handling
    function worked correctly (though still not sure what exactly is needed here in terms of how to massage data). Able to do that
    by navigating directly to that endpoint but that just displays the raw object.

* Still struggling some with the hooks, seems like am possibly stuck on the same issue Shane had earlier re. useState/useEffect
* Basically the problem seems to be that once the data is fetched, I can access it within that function (console.log(data.data.author))
  but after it has been assigned to the 'board' variable I am unable to access it (board.data.author doesn't work). Will keep digging on this.

🚨 Foothold 🚨 1/3/2023

- Now understand that bc the state variable has an initial value of an empty object. The useEffect hook hasn't fired to update the board val
  until after the initial render, so the useEffect must be triggered (conditional in the return? ln. 36 Game.jsx)
