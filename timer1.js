//input from command line and remap to Number type
const input = process.argv.slice(2).map(Number);

//sort the array
input.sort(function(a, b) {
  return a - b;
});

//timer function
const timer = function(input) {
  // delay counter
  let delay = 0;
  //scan through array to set timers
  for (const timer of input) {
    //only set timer if timer is 0 or greater
    if (timer >= 0) {
      setTimeout(() => {
        //could not get sound working so print is a message
        process.stdout.write(` Timer: ${timer}`);
      }, (delay += timer * 1000));
    }
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, delay);
};

//run the program
timer(input);
