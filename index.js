// Code your solution in this file!
function distanceFromHqInBlocks(location){
    if (location < 42){
        return (42 - location)
    }
    else if (location > 42){
        return(location - 42)
    }
    else {
        return location
    }}


function distanceFromHqInFeet(location){
    const distance = distanceFromHqInBlocks(location)
    return (distance * 264)
}

function distanceTravelledInFeet(loc1, loc2){
    if (loc1 > loc2){
        return ((loc1 - loc2)* 264 )
    }
    else if (loc1 < loc2){
        return ((loc2 - loc1)* 264 )
    }
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if (distance < 400){
        return 0
    }
    if (distance < 2000){
        return ((distance - 400)*0.02)
    }
    if (distance < 2500){
        return 25
    }
    if (distance > 2500){
        return 'cannot travel that far'
    }

}  