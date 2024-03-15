
const PI = 3.1415; //var PI represents the value of pi
const radius = 5; // the radius of the circular container where the plants are kept 
const areaMin = 0.8; // 1 plant sq meter
const AREA = PI * radius * radius; // total container area in sq meters

let currentPlants = 20; // initial number of plants in the container 
let weeks = 5; //number of weeks 

let plantGrowth = currentPlants * (2 ** weeks); // amount of plants
console.log("plant growth: " + plantGrowth);

const maxCapacity = AREA / areaMin; // 98.1 plants maximum number of plants that can be accommodated in the container
console.log("max capacity: " + maxCapacity);

const pruningTime = maxCapacity * 0.80; // amount of plants
console.log("Pruning time: " + pruningTime);

const minCapacity = maxCapacity * 0.50;

// PRUNED
if (plantGrowth > pruningTime) {
    console.log("It's time to prune.");
} else if (plantGrowth < minCapacity && plantGrowth > minCapacity) {
    console.log("Growing at an acceptable rate");
} else {
    console.log("you ca plant some more");
}

let biggerArea = plantGrowth * areaMin;
console.log("bigger area: " + biggerArea)
let biggerradius = Math.sqrt(biggerArea /PI)
console.log("Radius of bigger area" + biggerArea)

try {
    if (plantGrowth > maxCapacity){
        throw ('Too many plants for this planter!')
    }else {
        console.log("WAY TO GO! Keep growing!")
    }
}catch(err){
console.log(err)
}