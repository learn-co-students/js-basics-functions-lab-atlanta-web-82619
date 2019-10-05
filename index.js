// Code your solution in this file!
function distanceFromHqInBlocks(b1){
    let x = (b1 - 42);
    return Math.abs(x);
}

function distanceFromHqInFeet(b1){
    let x = ((b1 - 42)*264);
    return Math.abs(x);
}

function distanceTravelledInFeet(b1,b2){
    let x =((b2-b1)*264);
    return Math.abs(x);
}

function calculatesFarePrice(start, destination){
    let x =(Math.abs(start-destination)*264);
    let result 
    if (x > 400 && x < 2000) 
    {result = ((x - 400)*.02)}
    else if (x > 2500)
    {result = 'cannot travel that far'}
    else if (x > 2000)
    {result = 25}
    else {result = 0}


    return result
}
