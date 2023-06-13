//const distanceAbove = pickUpLocation- scuberHeadquarter;
//const distanceBelow = scuberHeadquarter- pickUpLocation;
function distanceFromHqInBlocks(pickUpLocation){
const scuberHeadquarter= 42;
if (pickUpLocation > 42 ){
    return pickUpLocation- scuberHeadquarter;
} else {return scuberHeadquarter- pickUpLocation };
}



function distanceFromHqInFeet(pickUpLocation){
const feet = 264;
 return distanceFromHqInBlocks(pickUpLocation) * feet;
}

function distanceTravelledInFeet(start, destination) {
     if (destination > start ){
        return (destination-start)*264;
     } else {return (start-destination)*264};
}

function  calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400){
         return 0;
    } if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000){
        return (distanceTravelledInFeet(start, destination)-400)*0.02;
    } if (distanceTravelledInFeet(start, destination) >2000 && distanceTravelledInFeet(start, destination) < 2500){
            return 25;
    } else if(distanceTravelledInFeet(start, destination) > 2500){
            return 'cannot travel that far';
    }
   }

