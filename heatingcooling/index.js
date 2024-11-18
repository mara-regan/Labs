let actualTemp = 65
let desiredTemp = 70

if (actualTemp < desiredTemp) {
    console.log("Run heat");
} else if (actualTemp > desiredTemp) {
    console.log("Run A/C");
} else {
    console.log("Standby");
}

let tempCelsius = 65
let targetUnit = "F"

if (targetUnit === "C") {
    console.log(tempCelsius);
}
else if (targetUnit === "F") {
    console.log(tempCelsius * 1.8 + 32);
}
else if (targetUnit === "K") {
    console.log(tempCelsius + 273.15);
}
else {
    console.log("N/A");
}