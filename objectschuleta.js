var storeManager = {}
storeManager.socialSkills = 50;
storeManager.specialAbility = "finding business opportunities";
storeManager.health = 30;
storeManager.dream = "start a company"
console.log(storeManager)

var storeAssitant = {
    movement : 3,
    streetSmart : 30,
    peopleSkills: 45 
}

console.log(storeAssitant)

//brackets notation

var house = {};
house["rooms"] = 4;
house['color'] = "blue";
house["price"] = 480;
house["furniture"] = "yes";
house["10"] = 114;
console.log(house);

//Evaluate expressions

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "green"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
};

// push method

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
console.log(arrayBuilder('josu', 'cafe', 'futbol'));
