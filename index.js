// Code your solution in this file!
function distanceFromHqInBlocks(streetNum){
    return Math.abs(42 - streetNum);
};

function distanceFromHqInFeet(streetNum){
    return distanceFromHqInBlocks(streetNum) * 264;
};

function distanceTravelledInFeet(blockOne, blockTwo){
    return Math.abs(blockOne - blockTwo) * 264;
};

function calculatesFarePrice(start, destination){
    const length = distanceTravelledInFeet(start, destination);
    if(length <= 400){
        return 0;
    } else if (length > 400 && length < 2000){
        return (length - 400) * .02;
    } else if (length > 2000 && length < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
};