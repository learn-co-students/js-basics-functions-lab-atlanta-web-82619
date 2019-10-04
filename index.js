// Code your solution in this file!
function distanceFromHqInBlocks(num) {
 return Math.abs(42 - num);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}


function distanceTravelledInFeet(num1, num2) {
  return Math.abs(distanceFromHqInFeet(num1) - distanceFromHqInFeet(num2));
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