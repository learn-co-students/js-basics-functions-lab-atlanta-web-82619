// Code your solution in this file!

function distanceFromHqInBlocks (block) {
    //returns the number of blocks given a value
    return Math.abs(block - 42);
}

function distanceFromHqInFeet (block) {
    // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, 
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    //the return value of distanceFromHqInBlocks can then be used to calculate feet
    return distanceFromHqInBlocks(block) * 264; 
  }

  function distanceTravelledInFeet (block1, block2) {
      // Calculates the number of feet a passenger travels given a starting block and an ending block - 
      // it only calculates distance North and South (uptown/downtown). 
      // It uses the knowledge that a block is 264 feet long.
      return Math.abs(distanceFromHqInFeet(block1) - distanceFromHqInFeet(block2));
  } 

  function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
      return 0
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
      return 'cannot travel that far'
    } else if (distanceTravelledInFeet(start, destination) > 2000) {
      return 25
    } else {
      const ride = distanceTravelledInFeet(start, destination);
      const fare = (ride - 400) * 0.02;
      return fare;
    }
  }