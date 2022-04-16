//load magic square array
var grid = [6,11,1,16,4,13,7,10,15,2,12,5,9,8,14,3];
var cells = grid.toString();
console.log(cells);

//separate into readable chunks 4 digits each
//var firstLine = grid[0] + " " + grid[1] + " " + grid[2] + " " + grid[3];
//var secondLine = grid[4] + " " + grid[5] + " " + grid[6] + " " + grid[7];
//var thirdLine = grid[8] + " " + grid[9] + " " + grid[10] + " " + grid[11];
//var fourthLine = grid[12] + " " + grid[13] + " " + grid[14] + " " + grid[15];

//print the array
document.getElementById("first").innerHTML = "This was a magic square until I plucked four numbers";  
document.getElementById("second").innerHTML = "Can you restore it to magic squareness?";  
//document.getElementById("third").innerHTML = thirdLine;  
//document.getElementById("fourth").innerHTML = fourthLine;  
 
//declare variables necessary to determine deleted positions
var taken = [1,2,3,4];
var pass = 0;

//determine where the array taken -- one cell to be taken from each row
while(pass == 0) {
shuffle(taken);
pass = 1;
//console.log(taken);
if(taken == "1,2,3,4") {pass = 0;}
if(taken == "4,3,2,1") {pass = 0;}
}
console.log(taken);


var r1dc = taken[0];
var r2dc = taken[1];
var r3dc = taken[2];
var r4dc = taken[3];

//print out the cells not taken

//row 1
if(r1dc != 1){
document.getElementById("r1c1").value = grid[0];  
document.getElementById("r1c1").disabled = true;
document.getElementById("r1c1").style.color = "red";
}
if(r1dc != 2){
document.getElementById("r1c2").value = grid[1];  
document.getElementById("r1c2").disabled = true;
document.getElementById("r1c2").style.color = "red";
}
if(r1dc != 3){
document.getElementById("r1c3").value = grid[2];  
document.getElementById("r1c3").disabled = true;
document.getElementById("r1c3").style.color = "red";
}
if(r1dc != 4){
document.getElementById("r1c4").value = grid[3];  
document.getElementById("r1c4").disabled = true;
document.getElementById("r1c4").style.color = "red";
}

//row 2
if(r2dc != 1){
document.getElementById("r2c1").value = grid[4];  
document.getElementById("r2c1").disabled = true;
document.getElementById("r2c1").style.color = "red";
}
if(r2dc != 2){
document.getElementById("r2c2").value = grid[5];  
document.getElementById("r2c2").disabled = true;
document.getElementById("r2c2").style.color = "red";
}
if(r2dc != 3){
document.getElementById("r2c3").value = grid[6];  
document.getElementById("r2c3").disabled = true;
document.getElementById("r2c3").style.color = "red";
}
if(r2dc != 4){
document.getElementById("r2c4").value = grid[7];  
document.getElementById("r2c4").disabled = true;
document.getElementById("r2c4").style.color = "red";
}

//row 3
if(r3dc != 1){
document.getElementById("r3c1").value = grid[8];  
document.getElementById("r3c1").disabled = true;
document.getElementById("r3c1").style.color = "red";
}
if(r3dc != 2){
document.getElementById("r3c2").value = grid[9];  
document.getElementById("r3c2").disabled = true;
document.getElementById("r3c2").style.color = "red";
}
if(r3dc != 3){
document.getElementById("r3c3").value = grid[10];  
document.getElementById("r3c3").disabled = true;
document.getElementById("r3c3").style.color = "red";
}
if(r3dc != 4){
document.getElementById("r3c4").value = grid[11];  
document.getElementById("r3c4").disabled = true;
document.getElementById("r3c4").style.color = "red";
}

//row 4
if(r4dc != 1){
document.getElementById("r4c1").value = grid[12];  
document.getElementById("r4c1").disabled = true;
document.getElementById("r4c1").style.color = "red";
}
if(r4dc != 2){
document.getElementById("r4c2").value = grid[13];  
document.getElementById("r4c2").disabled = true;
document.getElementById("r4c2").style.color = "red";
}
if(r4dc != 3){
document.getElementById("r4c3").value = grid[14];  
document.getElementById("r4c3").disabled = true;
document.getElementById("r4c3").style.color = "red";
}
if(r4dc != 4){
document.getElementById("r4c4").value = grid[15];  
document.getElementById("r4c4").disabled = true;
document.getElementById("r4c4").style.color = "red";
}



function check() {

let one = document.getElementById("r1c1").value;
let r1c1 = parseInt(one);
let two = document.getElementById("r1c2").value;
let r1c2 = parseInt(two);
let three = document.getElementById("r1c3").value;
let r1c3 = parseInt(three);
let four = document.getElementById("r1c4").value;
let r1c4 = parseInt(four);
let five = document.getElementById("r2c1").value;
let r2c1 = parseInt(five);
let six = document.getElementById("r2c2").value;
let r2c2 = parseInt(six);
let seven = document.getElementById("r2c3").value;
let r2c3 = parseInt(seven);
let eight = document.getElementById("r2c4").value;
let r2c4 = parseInt(eight);
let nine = document.getElementById("r3c1").value;
let r3c1 = parseInt(nine);
let ten = document.getElementById("r3c2").value;
let r3c2 = parseInt(ten);
let eleven = document.getElementById("r3c3").value;
let r3c3 = parseInt(eleven);
let twelve = document.getElementById("r3c4").value;
let r3c4 = parseInt(twelve);
let thirteen = document.getElementById("r4c1").value;
let r4c1 = parseInt(thirteen);
let fourteen = document.getElementById("r4c2").value;
let r4c2 = parseInt(fourteen);
let fifteen = document.getElementById("r4c3").value;
let r4c3 = parseInt(fifteen);
let sixteen = document.getElementById("r4c4").value;
let r4c4 = parseInt(sixteen);
var output = "";
var sum = r1c1+r1c2+r1c3+r1c4;
let tot5=r4c1+r3c2+r2c3+r1c4;
document.getElementById("tot5").innerHTML = tot5;  
let tot6=r1c1+r1c2+r1c3+r1c4;
document.getElementById("tot6").innerHTML = tot6;  
let tot7=r2c1+r2c2+r2c3+r2c4;
document.getElementById("tot7").innerHTML = tot7;  
let tot8=r3c1+r3c2+r3c3+r3c4;
document.getElementById("tot8").innerHTML = tot8;  
let tot9=r4c1+r4c2+r4c3+r4c4;
document.getElementById("tot9").innerHTML = tot9;  
let tot0=r1c1+r2c1+r3c1+r4c1;
document.getElementById("tot0").innerHTML = tot0;  
let tot1=r1c2+r2c2+r3c2+r4c2;
document.getElementById("tot1").innerHTML = tot1;  
let tot2=r1c3+r2c3+r3c3+r4c3;
document.getElementById("tot2").innerHTML = tot2;  
let tot3=r1c4+r2c4+r3c4+r4c4;
document.getElementById("tot3").innerHTML = tot3;  
let tot4=r1c1+r2c2+r3c3+r4c4;
document.getElementById("tot4").innerHTML = tot4;  

if (tot0==tot1&&tot1==tot2&&tot1==tot3&&tot1==tot4&&tot1==tot5&&tot1==tot6&&tot1==tot7&&tot1==tot8&&tot1==tot9) {
  output = `<h2><b>Magic Square! The sum is ${sum}.</b></h2>`;
} else {
  output = `<h2><b>This is not a magic square</b></h2>`;
}; 
document.getElementById("demo").innerHTML = output;  
};

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
 xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
  }

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


var seconds = 00; 
var tens = 00;
var appendTens = document.getElementById("tens")
var appendSeconds = document.getElementById("seconds")
var Interval;

function startTimer () {
  tens++; 
  
  if(tens <= 9){
    appendTens.innerHTML = "0" + tens;
  }
  
  if (tens > 9){
    appendTens.innerHTML = tens;
    
  } 
  
  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  
  if (seconds > 9){
    appendSeconds.innerHTML = seconds;
  }

}

function pickPuzzle() {
  var choice = $('#picker').find(':selected').text()

  if (choice == "Magic Square") {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    Interval = setInterval(startTimer, 10);
    $('#magic').css("display", "block");
    $('#wordsearch').css("display", "none");
  } else if (choice == "Word search") {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    Interval = setInterval(startTimer, 10);
    $('#magic').css("display", "none");
    $('#wordsearch').css("display", "block");
  } else {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    $('#magic').css("display", "none");
    $('#wordsearch').css("display", "none");
  }
}

/**
* Wordfind.js 0.0.1
* (c) 2012 Bill, BunKat LLC.
* Wordfind is freely distributable under the MIT license.
* For all details and documentation:
*     https://github.com/bunkat/wordfind
*/

(function () {

  /**
  * Generates a new word find (word search) puzzle provided a set of words.
  * Can automatically determine the smallest puzzle size in which all words
  * fit, or the puzzle size can be manually configured.  Will automatically
  * increase puzzle size until a valid puzzle is found.
  *
  * WordFind has no dependencies.
  */

  /**
  * Initializes the WordFind object.
  *
  * @api private
  */
  var WordFind = function () {

    // Letters used to fill blank spots in the puzzle
    var letters = 'abcdefghijklmnoprstuvwy';

    /**
    * Definitions for all the different orientations in which words can be
    * placed within a puzzle. New orientation definitions can be added and they
    * will be automatically available.
    */

    // The list of all the possible orientations
    var allOrientations = ['horizontal','horizontalBack','vertical','verticalUp',
                           'diagonal','diagonalUp','diagonalBack','diagonalUpBack'];

    // The definition of the orientation, calculates the next square given a
    // starting square (x,y) and distance (i) from that square.
    var orientations = {
      horizontal:     function(x,y,i) { return {x: x+i, y: y  }; },
      horizontalBack: function(x,y,i) { return {x: x-i, y: y  }; },
      vertical:       function(x,y,i) { return {x: x,   y: y+i}; },
      verticalUp:     function(x,y,i) { return {x: x,   y: y-i}; },
      diagonal:       function(x,y,i) { return {x: x+i, y: y+i}; },
      diagonalBack:   function(x,y,i) { return {x: x-i, y: y+i}; },
      diagonalUp:     function(x,y,i) { return {x: x+i, y: y-i}; },
      diagonalUpBack: function(x,y,i) { return {x: x-i, y: y-i}; }
    };

    // Determines if an orientation is possible given the starting square (x,y),
    // the height (h) and width (w) of the puzzle, and the length of the word (l).
    // Returns true if the word will fit starting at the square provided using
    // the specified orientation.
    var checkOrientations = {
      horizontal:     function(x,y,h,w,l) { return w >= x + l; },
      horizontalBack: function(x,y,h,w,l) { return x + 1 >= l; },
      vertical:       function(x,y,h,w,l) { return h >= y + l; },
      verticalUp:     function(x,y,h,w,l) { return y + 1 >= l; },
      diagonal:       function(x,y,h,w,l) { return (w >= x + l) && (h >= y + l); },
      diagonalBack:   function(x,y,h,w,l) { return (x + 1 >= l) && (h >= y + l); },
      diagonalUp:     function(x,y,h,w,l) { return (w >= x + l) && (y + 1 >= l); },
      diagonalUpBack: function(x,y,h,w,l) { return (x + 1 >= l) && (y + 1 >= l); }
    };

    // Determines the next possible valid square given the square (x,y) was ]
    // invalid and a word lenght of (l).  This greatly reduces the number of
    // squares that must be checked. Returning {x: x+1, y: y} will always work
    // but will not be optimal.
    var skipOrientations = {
      horizontal:     function(x,y,l) { return {x: 0,   y: y+1  }; },
      horizontalBack: function(x,y,l) { return {x: l-1, y: y    }; },
      vertical:       function(x,y,l) { return {x: 0,   y: y+100}; },
      verticalUp:     function(x,y,l) { return {x: 0,   y: l-1  }; },
      diagonal:       function(x,y,l) { return {x: 0,   y: y+1  }; },
      diagonalBack:   function(x,y,l) { return {x: l-1, y: x>=l-1?y+1:y    }; },
      diagonalUp:     function(x,y,l) { return {x: 0,   y: y<l-1?l-1:y+1  }; },
      diagonalUpBack: function(x,y,l) { return {x: l-1, y: x>=l-1?y+1:y  }; }
    };

    /**
    * Initializes the puzzle and places words in the puzzle one at a time.
    *
    * Returns either a valid puzzle with all of the words or null if a valid
    * puzzle was not found.
    *
    * @param {[String]} words: The list of words to fit into the puzzle
    * @param {[Options]} options: The options to use when filling the puzzle
    */
    var fillPuzzle = function (words, options) {

      var puzzle = [], i, j, len;
      console.log('options = ', options);

      // initialize the puzzle with blanks
      for (i = 0; i < options.height; i++) {
        puzzle.push([]);
        for (j = 0; j < options.width; j++) {
          puzzle[i].push('');
        }
      }

      // add each word into the puzzle one at a time
      for (i = 0, len = words.length; i < len; i++) {
        if (!placeWordInPuzzle(puzzle, options, words[i])) {
          // if a word didn't fit in the puzzle, give up
          return null;
        }
      }

      // return the puzzle
      return puzzle;
    };

    /**
    * Adds the specified word to the puzzle by finding all of the possible
    * locations where the word will fit and then randomly selecting one. Options
    * controls whether or not word overlap should be maximized.
    *
    * Returns true if the word was successfully placed, false otherwise.
    *
    * @param {[[String]]} puzzle: The current state of the puzzle
    * @param {[Options]} options: The options to use when filling the puzzle
    * @param {String} word: The word to fit into the puzzle.
    */
    var placeWordInPuzzle = function (puzzle, options, word) {

      // find all of the best locations where this word would fit
      var locations = findBestLocations(puzzle, options, word);

      if (locations.length === 0) {
        return false;
      }

      // select a location at random and place the word there
      var sel = locations[Math.floor(Math.random() * locations.length)];
      placeWord(puzzle, word, sel.x, sel.y, orientations[sel.orientation]);

      return true;
    };

    /**
    * Iterates through the puzzle and determines all of the locations where
    * the word will fit. Options determines if overlap should be maximized or
    * not.
    *
    * Returns a list of location objects which contain an x,y cooridinate
    * indicating the start of the word, the orientation of the word, and the
    * number of letters that overlapped with existing letter.
    *
    * @param {[[String]]} puzzle: The current state of the puzzle
    * @param {[Options]} options: The options to use when filling the puzzle
    * @param {String} word: The word to fit into the puzzle.
    */
    var findBestLocations = function (puzzle, options, word) {

      var locations = [],
          height = options.height,
          width = options.width,
          wordLength = word.length,
          maxOverlap = 0; // we'll start looking at overlap = 0

      // loop through all of the possible orientations at this position
      for (var k = 0, len = options.orientations.length; k < len; k++) {
        
        var orientation = options.orientations[k],
            check = checkOrientations[orientation],
            next = orientations[orientation],
            skipTo = skipOrientations[orientation],
            x = 0, y = 0;

        // loop through every position on the board
        while( y < height ) {

          // see if this orientation is even possible at this location
          if (check(x, y, height, width, wordLength)) {

            // determine if the word fits at the current position
            var overlap = calcOverlap(word, puzzle, x, y, next);

            // if the overlap was bigger than previous overlaps that we've seen
            if (overlap >= maxOverlap || (!options.preferOverlap && overlap > -1)) {
              maxOverlap = overlap;
              locations.push({x: x, y: y, orientation: orientation, overlap: overlap});
            }

            x++;
            if (x >= width) {
              x = 0;
              y++;
            }
          }
          else {
            // if current cell is invalid, then skip to the next cell where
            // this orientation is possible. this greatly reduces the number
            // of checks that we have to do overall
            var nextPossible = skipTo(x,y,wordLength);
            x = nextPossible.x;
            y = nextPossible.y;
          }

        }
      }

      // finally prune down all of the possible locations we found by
      // only using the ones with the maximum overlap that we calculated
      return options.preferOverlap ?
             pruneLocations(locations, maxOverlap) :
             locations;
    };

    /**
    * Determines whether or not a particular word fits in a particular
    * orientation within the puzzle.
    *
    * Returns the number of letters overlapped with existing words if the word
    * fits in the specified position, -1 if the word does not fit.
    *
    * @param {String} word: The word to fit into the puzzle.
    * @param {[[String]]} puzzle: The current state of the puzzle
    * @param {int} x: The x position to check
    * @param {int} y: The y position to check
    * @param {function} fnGetSquare: Function that returns the next square
    */
    var calcOverlap = function (word, puzzle, x, y, fnGetSquare) {
      var overlap = 0;

      // traverse the squares to determine if the word fits
      for (var i = 0, len = word.length; i < len; i++) {

        var next = fnGetSquare(x, y, i),
            square = puzzle[next.y][next.x];
        
        // if the puzzle square already contains the letter we
        // are looking for, then count it as an overlap square
        if (square === word[i]) {
          overlap++;
        }
        // if it contains a different letter, than our word doesn't fit
        // here, return -1
        else if (square !== '' ) {
          return -1;
        }
      }

      // if the entire word is overlapping, skip it to ensure words aren't
      // hidden in other words
      return overlap;
    };

    /**
    * If overlap maximization was indicated, this function is used to prune the
    * list of valid locations down to the ones that contain the maximum overlap
    * that was previously calculated.
    *
    * Returns the pruned set of locations.
    *
    * @param {[Location]} locations: The set of locations to prune
    * @param {int} overlap: The required level of overlap
    */
    var pruneLocations = function (locations, overlap) {

      var pruned = [];
      for(var i = 0, len = locations.length; i < len; i++) {
        if (locations[i].overlap >= overlap) {
          pruned.push(locations[i]);
        }
      }

      return pruned;
    };

    /**
    * Places a word in the puzzle given a starting position and orientation.
    *
    * @param {[[String]]} puzzle: The current state of the puzzle
    * @param {String} word: The word to fit into the puzzle.
    * @param {int} x: The x position to check
    * @param {int} y: The y position to check
    * @param {function} fnGetSquare: Function that returns the next square
    */
    var placeWord = function (puzzle, word, x, y, fnGetSquare) {
      for (var i = 0, len = word.length; i < len; i++) {
        var next = fnGetSquare(x, y, i);
        puzzle[next.y][next.x] = word[i];
      }
    };

    return {

      /**
      * Returns the list of all of the possible orientations.
      * @api public
      */
      validOrientations: allOrientations,

      /**
      * Returns the orientation functions for traversing words.
      * @api public
      */
      orientations: orientations,

      /**
      * Generates a new word find (word search) puzzle.
      *
      * Settings:
      *
      * height: desired height of the puzzle, default: smallest possible
      * width:  desired width of the puzzle, default: smallest possible
      * orientations: list of orientations to use, default: all orientations
      * fillBlanks: true to fill in the blanks, default: true
      * maxAttempts: number of tries before increasing puzzle size, default:3
      * preferOverlap: maximize word overlap or not, default: true
      *
      * Returns the puzzle that was created.
      *
      * @param {[String]} words: List of words to include in the puzzle
      * @param {options} settings: The options to use for this puzzle
      * @api public
      */
      newPuzzle: function(words, settings) {
        var wordList, puzzle, attempts = 0, opts = settings || {};

        console.log('newPuzzle() :: settings = ', settings);
        
        // copy and sort the words by length, inserting words into the puzzle
        // from longest to shortest works out the best
        wordList = words.slice(0).sort( function (a,b) {
          return (a.length < b.length) ? 1 : 0;
        });
        
        // initialize the options
        var options = {
          height:       opts.height || wordList[0].length,
          width:        opts.width || wordList[0].length,
          orientations: opts.orientations || allOrientations,
          fillBlanks:   opts.fillBlanks !== undefined ? opts.fillBlanks : true,
          maxAttempts:  opts.maxAttempts || 3,
          preferOverlap: opts.preferOverlap !== undefined ? opts.preferOverlap : true
        };

        // add the words to the puzzle
        // since puzzles are random, attempt to create a valid one up to
        // maxAttempts and then increase the puzzle size and try again
        while (!puzzle) {
          while (!puzzle && attempts++ < options.maxAttempts) {
            puzzle = fillPuzzle(wordList, options);
          }

          if (!puzzle) {
            options.height++;
            options.width++;
            attempts = 0;
          }
        }

        // fill in empty spaces with random letters
        if (options.fillBlanks) {
          this.fillBlanks(puzzle, options);
        }

        return puzzle;
      },

      /**
      * Fills in any empty spaces in the puzzle with random letters.
      *
      * @param {[[String]]} puzzle: The current state of the puzzle
      * @api public
      */
      fillBlanks: function (puzzle) {
        for (var i = 0, height = puzzle.length; i < height; i++) {
          var row = puzzle[i];
          for (var j = 0, width = row.length; j < width; j++) {

            if (!puzzle[i][j]) {
              var randomLetter = Math.floor(Math.random() * letters.length);
              puzzle[i][j] = letters[randomLetter];
            }
          }
        }
      },

      /**
      * Returns the starting location and orientation of the specified words
      * within the puzzle. Any words that are not found are returned in the
      * notFound array.
      *
      * Returns
      *   x position of start of word
      *   y position of start of word
      *   orientation of word
      *   word
      *   overlap (always equal to word.length)
      *
      * @param {[[String]]} puzzle: The current state of the puzzle
      * @param {[String]} words: The list of words to find
      * @api public
      */
      solve: function (puzzle, words) {
        var options = {
                        height:       puzzle.length,
                        width:        puzzle[0].length,
                        orientations: allOrientations,
                        preferOverlap: true
                      },
            found = [],
            notFound = [];

        for(var i = 0, len = words.length; i < len; i++) {
          var word = words[i],
              locations = findBestLocations(puzzle, options, word);

          if (locations.length > 0 && locations[0].overlap === word.length) {
            locations[0].word = word;
            found.push(locations[0]);
          }
          else {
            notFound.push(word);
          }
        }

        return { found: found, notFound: notFound };
      },

      /**
      * Outputs a puzzle to the console, useful for debugging.
      * Returns a formatted string representing the puzzle.
      *
      * @param {[[String]]} puzzle: The current state of the puzzle
      * @api public
      */
      print: function (puzzle) {
        var puzzleString = '';
        for (var i = 0, height = puzzle.length; i < height; i++) {
          var row = puzzle[i];
          for (var j = 0, width = row.length; j < width; j++) {
            puzzleString += (row[j] === '' ? ' ' : row[j]) + ' ';
          }
          puzzleString += '\n';
        }

        console.log(puzzleString);
        return puzzleString;
      }
    };
  };

  /**
  * Allow library to be used within both the browser and node.js
  */
  var root = typeof exports !== "undefined" && exports !== null ? exports : window;
  root.wordfind = WordFind();

}).call(this);

/**
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
===========================================================================
*/

/**
* Wordfind.js 0.0.1
* (c) 2012 Bill, BunKat LLC.
* Wordfind is freely distributable under the MIT license.
* For all details and documentation:
*     https://github.com/bunkat/wordfind
*/

(function (document, $, wordfind) {

  'use strict';

  /**
  * An example game using the puzzles created from wordfind.js. Click and drag
  * to highlight words.
  *
  * WordFindGame requires wordfind.js and jQuery.
  */

  /**
  * Initializes the WordFindGame object.
  *
  * @api private
  */
  var WordFindGame = function() {

    // List of words for this game
    var wordList;

    /**
    * Draws the puzzle by inserting rows of buttons into el.
    *
    * @param {String} el: The jQuery element to write the puzzle to
    * @param {[[String]]} puzzle: The puzzle to draw
    */
    var drawPuzzle = function (el, puzzle) {
      console.log('drawPuzzle()');
      var output = '';
      // for each row in the puzzle
      for (var i = 0, height = puzzle.length; i < height; i++) {
        // append a div to represent a row in the puzzle
        var row = puzzle[i];
        output += '<div>';
        // for each element in that row
        for (var j = 0, width = row.length; j < width; j++) {
            // append our button with the appropriate class
            output += '<button class="puzzleSquare" x="' + j + '" y="' + i + '">';
            output += row[j] || '&nbsp;';
            output += '</button>';
        }
        // close our div that represents a row
        output += '</div>';
      }

      $(el).html(output);
    };

    /**
    * Draws the words by inserting an unordered list into el.
    *
    * @param {String} el: The jQuery element to write the words to
    * @param {[String]} words: The words to draw
    */
    var drawWords = function (el, words) {
      
      var output = '<ul>';
      for (var i = 0, len = words.length; i < len; i++) {
        var word = words[i];
        output += '<li class="word ' + word + '">' + word;
      }
      output += '</ul>';

      $(el).prepend(output);
    };


    /**
    * Game play events.
    *
    * The following events handle the turns, word selection, word finding, and
    * game end.
    *
    */

    // Game state
    var startSquare, selectedSquares = [], curOrientation, curWord = '';

    /**
    * Event that handles mouse down on a new square. Initializes the game state
    * to the letter that was selected.
    *
    */
    var startTurn = function () {
      $(this).addClass('selected');
      startSquare = this;
      selectedSquares.push(this);
      curWord = $(this).text();
    };



    /**
    * Event that handles mouse over on a new square. Ensures that the new square
    * is adjacent to the previous square and the new square is along the path
    * of an actual word.
    *
    */
    var select = function (target) {
      // if the user hasn't started a word yet, just return
      if (!startSquare) {
        return;
      }

      // if the new square is actually the previous square, just return
      var lastSquare = selectedSquares[selectedSquares.length-1];
      if (lastSquare == target) {
        return;
      }

      // see if the user backed up and correct the selectedSquares state if
      // they did
      var backTo;
      for (var i = 0, len = selectedSquares.length; i < len; i++) {
        if (selectedSquares[i] == target) {
          backTo = i+1;
          break;
        }
      }

      while (backTo < selectedSquares.length) {
        $(selectedSquares[selectedSquares.length-1]).removeClass('selected');
        selectedSquares.splice(backTo,1);
        curWord = curWord.substr(0, curWord.length-1);
      }


      // see if this is just a new orientation from the first square
      // this is needed to make selecting diagonal words easier
      var newOrientation = calcOrientation(
          $(startSquare).attr('x')-0,
          $(startSquare).attr('y')-0,
          $(target).attr('x')-0,
          $(target).attr('y')-0
          );

      if (newOrientation) {
        selectedSquares = [startSquare];
        curWord = $(startSquare).text();
        if (lastSquare !== startSquare) {
          $(lastSquare).removeClass('selected');
          lastSquare = startSquare;
        }
        curOrientation = newOrientation;
      }

      // see if the move is along the same orientation as the last move
      var orientation = calcOrientation(
          $(lastSquare).attr('x')-0,
          $(lastSquare).attr('y')-0,
          $(target).attr('x')-0,
          $(target).attr('y')-0
          );

      // if the new square isn't along a valid orientation, just ignore it.
      // this makes selecting diagonal words less frustrating
      if (!orientation) {
        return;
      }

      // finally, if there was no previous orientation or this move is along
      // the same orientation as the last move then play the move
      if (!curOrientation || curOrientation === orientation) {
        curOrientation = orientation;
        playTurn(target);
      }

    };
    
    var touchMove = function(e) {
      var xPos = e.originalEvent.touches[0].pageX;
      var yPos = e.originalEvent.touches[0].pageY;
      var targetElement = document.elementFromPoint(xPos, yPos);
      select(targetElement)
    };
    
    var mouseMove = function() { 
      select(this);
    };

    /**
    * Updates the game state when the previous selection was valid.
    *
    * @param {el} square: The jQuery element that was played
    */
    var playTurn = function (square) {

      // make sure we are still forming a valid word
      for (var i = 0, len = wordList.length; i < len; i++) {
        if (wordList[i].indexOf(curWord + $(square).text()) === 0) {
          $(square).addClass('selected');
          selectedSquares.push(square);
          curWord += $(square).text();
          break;
        }
      }
    };

    /**
    * Event that handles mouse up on a square. Checks to see if a valid word
    * was created and updates the class of the letters and word if it was. Then
    * resets the game state to start a new word.
    *
    */
    var endTurn = function () {

      // see if we formed a valid word
      for (var i = 0, len = wordList.length; i < len; i++) {
        
        if (wordList[i] === curWord) {
          $('.selected').addClass('found');
          wordList.splice(i,1);
          $('.' + curWord).addClass('wordFound');
        }

        if (wordList.length === 0) {
          $('.puzzleSquare').addClass('complete');
        }
      }

      // reset the turn
      $('.selected').removeClass('selected');
      startSquare = null;
      selectedSquares = [];
      curWord = '';
      curOrientation = null;
    };

    /**
    * Given two points, ensure that they are adjacent and determine what
    * orientation the second point is relative to the first
    *
    * @param {int} x1: The x coordinate of the first point
    * @param {int} y1: The y coordinate of the first point
    * @param {int} x2: The x coordinate of the second point
    * @param {int} y2: The y coordinate of the second point
    */
    var calcOrientation = function (x1, y1, x2, y2) {

      for (var orientation in wordfind.orientations) {
        var nextFn = wordfind.orientations[orientation];
        var nextPos = nextFn(x1, y1, 1);

        if (nextPos.x === x2 && nextPos.y === y2) {
          return orientation;
        }
      }

      return null;
    };

    return {

      /**
      * Creates a new word find game and draws the board and words.
      *
      * Returns the puzzle that was created.
      *
      * @param {[String]} words: The words to add to the puzzle
      * @param {String} puzzleEl: Selector to use when inserting the puzzle
      * @param {String} wordsEl: Selector to use when inserting the word list
      * @param {Options} options: WordFind options to use when creating the puzzle
      */
      create: function(words, puzzleEl, wordsEl, options) {
        
        wordList = words.slice(0).sort();

        var puzzle = wordfind.newPuzzle(words, options);

         console.log('puzzle = ', puzzle);
        
        // draw out all of the words
        drawPuzzle(puzzleEl, puzzle);
        drawWords(wordsEl, wordList);

        // attach events to the buttons
        // optimistically add events for windows 8 touch
        if (window.navigator.msPointerEnabled) {
          $('.puzzleSquare').on('MSPointerDown', startTurn);
          $('.puzzleSquare').on('MSPointerOver', select);
          $('.puzzleSquare').on('MSPointerUp', endTurn);
        }
        else {
          $('.puzzleSquare').mousedown(startTurn);
          $('.puzzleSquare').mouseenter(mouseMove);
          $('.puzzleSquare').mouseup(endTurn);
          $('.puzzleSquare').on("touchstart", startTurn);
          $('.puzzleSquare').on("touchmove", touchMove);
          $('.puzzleSquare').on("touchend", endTurn);
        }

        return puzzle;
      },

      /**
      * Solves an existing puzzle.
      *
      * @param {[[String]]} puzzle: The puzzle to solve
      * @param {[String]} words: The words to solve for
      */
      solve: function(puzzle, words) {

        var solution = wordfind.solve(puzzle, words).found;

        for( var i = 0, len = solution.length; i < len; i++) {
          var word = solution[i].word,
              orientation = solution[i].orientation,
              x = solution[i].x,
              y = solution[i].y,
              next = wordfind.orientations[orientation];

          if (!$('.' + word).hasClass('wordFound')) {
            for (var j = 0, size = word.length; j < size; j++) {
              var nextPos = next(x, y, j);
              $('[x="' + nextPos.x + '"][y="' + nextPos.y + '"]').addClass('solved');
            }

            $('.' + word).addClass('wordFound');
          }
        }
        
        $('#solve').addClass('gameSolved'); 

      }
    };
  };


  /**
  * Allow game to be used within the browser
  */
  window.wordfindgame = WordFindGame();

}(document, jQuery, wordfind));

$(function () {
  var words = ['save', 'earn', 'invest', 'retirement', 'account', 'money', 'credit', 'debt', 'assets', 'loan', 'interest', 'accrual',
 'economy', 'sharing', 'savings', 'budget', 'capital', 'collateral', 'bond', 'market', 'value', 'index'];
  // start a word find game
  var gamePuzzle = wordfindgame.create(
    words, 
    '#puzzle', 
    '#words', 
    { height: 8, 
      width:15, 
      fillBlanks: true
    });
  $('#solve').click( function() {
    wordfindgame.solve(gamePuzzle, words);
  });
  // create just a puzzle, without filling in the blanks and print to console
  var puzzle = wordfind.newPuzzle(
    words, 
    {height: 5, width:15, fillBlanks: true}
  );
  wordfind.print(puzzle);
});