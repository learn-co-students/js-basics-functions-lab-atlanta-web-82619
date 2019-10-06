function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42);
}

function distanceFromHqInFeet(block) {
  return Math.abs((block - 42) * 264);
}

function distanceTravelledInFeet(start, finish) {
  return Math.abs((start - finish) * 264);
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0
    } else if (distanceTravelledInFeet(start, destination) > 2500){
        return 'cannot travel that far'
    } else if (distanceTravelledInFeet(start, destination) > 2000){
        return 25
    } else {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    }
}
