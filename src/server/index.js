const { response } = require("express");
const express = require("express"); 
const app = express(); 

const path = require("path"); // This brings in the path module, which provides utilities
// for interacting with and manipulating file and directory paths
const port = process.env.PORT || 3000; // We are designating a port for the server to listen on, in this case the boolean |or|
// decides whether to use the port specified in the environment variable PORT or local port 3000
// ?? QUESTION: what is the environment variable PORT? Port provided by external server?

const DIST_DIR = path.join(__dirname, "..", "../dist"); // Seeing lots of references to DIST DIR as a BUILD DIRECTORY. Here we are using path.join to
// join __dirname (__dirname returns the path of the folder where THE CURRENT JS FILE RESIDES )
// with the path to the dist folder, which is one directory up from the current directory
// ?? QUESTION: what is __dirname? __dirname is a global variable that provides the absolute path
//
// FIGURE THIS OUT
const HTML_FILE = path.join(DIST_DIR, "index.html"); // Another path created with path.join, this time joining the DIST_DIR with the index.html file

const { getCrosswordData } = require("./newGameManager"); // A little confused here but I believe we are creating a variable, getCrosswordData,
// which is assigned to the exported function getCrosswordData from newGameManager.js
// This gives us access to an object containing the crossword data

app.use(express.static(DIST_DIR)); //Middleware funcs - FIGURE THESE OUT
// Inject a function before express handles endpoint requests
app.use(express.static("public"));

app.get("/creategame", (req, res) => {
  // app.get specifies a callback func that will be invoked whenever there
  const { date } = req.query; // is a GET request on that path, the func takes req and res as args.
  // ie. the function is a route handler for GET requests to the given URL

  // This creates an ENDPOINT for the client to get the crossword data
  // the URL would be something like http://localhost:3000/creategame?date=yyyy-mm-dd

  // req.query is an object populated by request query strings found in
  // the URL, they are found after the '?' in any URL (mults. seperated by '&')
  // Think about dates in URL

  // ?? QUESTION: in order to pass date info from req.query to { date }, the
  // date info would be part of the URL after /creategame?
  console.log("index.js /creategame endpoint");
  if (date !== undefined) {
    res.json({ data: getCrosswordData(date) });
  }
});

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
