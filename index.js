// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue>42){
        return someValue-42;
    }else{
        return 42-someValue;
    }
}
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(264*(destination-start));
}
function calculatesFarePrice(start, destination){
    if(distanceTravelledInFeet(start, destination)<400){
        return 0;
    }else if (distanceTravelledInFeet(start, destination)<=2000){
        return (distanceTravelledInFeet(start, destination)-400)/50;
    }else if (distanceTravelledInFeet(start, destination)>2500){
        return "cannot travel that far";
    }else{
        return 25;
    }
}