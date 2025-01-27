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
  (https://www.nytimes.com/crosswords) as a template.
- The app will allow for single player
  play as well as multiplayer which will have both competetive and cooperative modes.
- Puzzles will be generated using a DB of json files containing historical NYT puzzle data
- Player profiles may be created, saved, and updated with relevant data
- ?? Games will be played 'live' or on a turn based system
- Game components (board/grid, hints) will be generated using the historical data and can be
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

* Relevant info:

- the .json() method does not produce JSON data, rather it takes in JSON, parses it, and produces a JS object
- Dependency array: Certain React hooks accept two args. The first is the callback function and the second
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

## 🚨 Foothold 🚨 1/3/2023

- Now understand that bc the state variable has an initial value of an empty object. The useEffect hook hasn't fired to update the board val
  until after the initial render, so the useEffect must be triggered (conditional in the return? ln. 36 Game.jsx)

## 1/4/2023

- Not as strong of a foothold as I had hoped. Still can't get data to render successfully, not sure what am missing but overall
  understanding of the render cycle feels flimsy. Look into this. Find out why the && short circuit isn't working...component issue? Missing something else?

## 1/5/2023

😖 Roadblock 😖

- Still fighting through the rendering...Realized that the empty object would return truthy so that won't work for a short circuit. Spent a bit of time trying various different ways to get the short circuit to happen (trying to access props that didn't exist/were undefined), Object.keys(board).length > 0, should have stopped sooner but eventually looked more into objects and it turns out that except in some exotic cases objects will ALWAYS return as a truthy val....Frustrated I didn't look into this sooner as it would have saved some needless headscratching. So this means I will need to re-handle my data as an array so I can get the falsey return.

## 1/6/2023

👊 Minor Breakthrough 👊

- Tried setting initial value of 'board' to an empty array, re-wrote the data handling function in newGameManager.
  Still using a new object to collect the entries I want but instead of returning that object I return
  Object.entries(puzzleData) to output an array of key/value pairs.
- At this point I figured I should be able to access the array as usual, but I wasn't able to accomplish that.
  I took at Shane's code to see how he handles it and noticed that he had a difference in the fetch request
  for his useEffect call. Initially mine was written as such:

                                      useEffect(() => {
                                          const date = "1979-10-10";
                                          fetch(`/creategame?date=${date}`).then((data) => {
                                          if (data.status === 200) {
          Problem is here =====>              data.json().then((data) => {
                                              setBoard(data);
                                              console.log(data);
                                              });
                                          }
                                          });
                                      }, []);

- My reading of ln 149 is that 'data' gets resolved as an object, so in
- .then setBoard would make board an object which is not what is needed
- Shane wrote his equivalent line as: data.json().then(({data})=> {...})
- Need to get clarification on this...is it destructuring? If so how is board
  not being set as an object? Either way this did the trick, now useEffect is written:

                                   useEffect(() => {
                                    const date = "1979-10-10";
                                    fetch(`/creategame?date=${date}`).then((data) => {
                                    if (data.status === 200) {
                    **                  data.json().then(({data}) => {                **
                                        setBoard(data);
                                        console.log(data);
                                        });
                                    }
                                    });
                                }, []);

But need to nail down the mechanics
|

## 1/8/2023

- Going into the week with a clear goal in mind:

  - cells highlight/change color on click/selection (even better if I can get
    whole answer cell to highlight)
  - Try and get some assoc. btwn answer cells and clues

- Going back over the code added on Sat., figure out where the holes are and try and get some footholds.

## 1/9/2023

- Going to try and diagram/draw things out and try and get a better model of whats going on. Feels like a lot of time is spent switching btwn files/components/views and it all starts to blur together. Would be very happy to get some sort of interaction (highlight cells etc.)

* Recap: Spent most time tonight going back over the syntax and components since that was feeling a little hairy. Wrote out some of the components and JSX on paper to get a better grip. Clarifying my mental model some, a fair bit of confusion stemmed from getting lost in the code and losing the thread of connection. Feeling better about my grasp overall.
  Would have felt better getting a little more done re. interactivity but I do feel like I
  have a better understanding, and was able to get the clues contained in a scrolling list. That was just a quick CSS fix but it's a nice boost all the same.

## 1/10/2023

- Getting a little frustrated with lack of headway.
- Taking a long time to parse through everything and by the time it starts to click a little there isn't a lot of time to do much with it.
- Unsure if this is a symptom of inexperience overall or if there are some specific gaps that are.
- Lots of time still wasted pondering, finding myself vague and unsure about how to proceed or what the next step should be

-Was able to get background color of the grid to change with onClick but not the individual cells

## 1/11/2023

- Identify the block: thinking a lot of the issue comes down to focus, and being able to apply what I know.
  Realized in talking to Eugene that fundamentally my understanding is sound, just the basics for now but I
  do feel confident that I undertstand what React is doing as far as components and state and props and how all that works
  but for some reason it still just doesn't click and it feels like a big part of that is due to getting easily distracted by
  all the other moving parts while trying to hone in on one particular thing. I believe this may be overcome simply by getting
  more fingers on keys.
- Need to establish CLEAR GOALS and steps to attain them. Vague goals encourage distraction and getting easily sidetracked.

## 1/12/2023

- Refocusing, attempting to exercise patience and take a much more methodical approach. Rubber duck the whole thing and
  take extensive notes. Only begin to try and add functionality after I know exactly what is happening and why.

## 1/13/2023

- Last night started going through the components to solidify my understanding and figure out where the gaps and
  pain points are. Started with <Cell /> since that's where I was trying to get some functionality. Talked my way through it and wrote down the thought process and all relevant details, still working through <Cell />.
  Today copied over handwritten notes to PC and refined a little bit, later in the session started trying to think
  more about the task at hand (cell highlight) but still focused mainly on just running through and understanding.
- Ran into some choppy waters around the .map methods for generating the grid, realized I didn't fully understand what the data looked like as it was coming through props. Spent a good bit of time tugging on those strings.
- Got a little sidetracked by the SVG text element that holds the 'gridnum', but that also led me down a rabbithole of realizing that I wasn't exactly sure what data I had access to where, and EXACTLY what that data looked like. Definitely need to tighten up on this
- Once I got my head around the data a -little- better (need more better) I spent some time thinking about how to render the correct gridnums and couldn't get there. May be a little premature on that.

Next step will be to complete notes and then start thinking abt functionality again.

## 1/16/2023

Continued walking through cell component. Looked at all the data currently avail and collected copies of the relevant objects and arrays 
so that I am able to see them all in one place. Hoping that by actually seeing them in close proximity to each other I may be able to connect some of the dots on how to get the functionality that I want.
