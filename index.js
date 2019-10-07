// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(42 - location)
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
    const feet = distanceTravelledInFeet(start, end)
    let price;

    if (feet <= 400) {
        price = 0;
    } 
    else if (feet <= 2000) {
        price = .02 * (feet - 400)
    }
    else if (feet <= 2500) {
        price = 25
    }
    else {
        price = 'cannot travel that far'
    }
    return price;
}