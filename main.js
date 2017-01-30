(function(){
  "use strict";

  var commonWords = [
    "the","of","and","a","to","in","is","you","that","it","he",
    "was","for","on","are","as","with","his","they","I","at","be",
    "this","have","from","or","one","had","by","word","but","not",
    "what","all","were","we","when","your","can","said","there",
    "use","an","each","which","she","do","how","their","if","will",
    "up","other","about","out","many","then","them","these","so",
    "some","her","would","make","like","him","into","time","has",
    "look","two","more","write","go","see","number","no","way",
    "could","people","my","than","first","water","been","call",
    "who","oil","its","now","find","long","down","day","did","get",
    "come","made","may","part"
  ];

/* Ask ourselves what are the tasks we need to take */

// 1. Filter out all the words 3 characters or smaller
// 2. Choose a word
// 3. Cut up word into characters

/* Ask ourselves what tools in javascript do I know of that can solve this task */

// 1. Filter out all the words 3 characters or smaller
// Use .filter() functional iterator to create a new array
// 2. Choose a random word
// How do I choose a ranom word from an array in javascript?
// 3. Cut up word into characters

/* Write some code */

// 1. Filter out all the words 3 characters or smaller
// Use .filter() functional iterator to create a new array
var validWords = commonWords.filter(function(word){
  return word.length > 3;
});

// 2. Choose a random word
// How do I choose a ranom word from an array in javascript?

// 3. Cut up word into characters


})();
