// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42)
}

function distanceFromHqInFeet(distance) {
    return (distanceFromHqInBlocks(distance) * 264)
}

function distanceTravelledInFeet(starting, ending) {
    return Math.abs((starting - ending) * 264)
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)

    if (distance <= 400) {
        return 0
    }
    else if (distance <= 2000) {
        return ((distance - 400) * 0.02)
    }
    else if (distance <= 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}