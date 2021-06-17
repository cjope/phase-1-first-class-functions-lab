const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers() {
    let firstTwo = drivers.slice(0,2);
    return firstTwo;
}
console.log(returnFirstTwoDrivers());

function returnLastTwoDrivers() {
    let lastTwo = drivers.slice(-2);
    return lastTwo;
}
console.log(returnLastTwoDrivers());


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//high order function
//operand (conditional operator)

const createFareMultiplier = operand => {
    return (input) => input * operand;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fareQuintupler = createFareMultiplier(5);

const selectDifferentDrivers = (arrayOfDrivers,fn) => fn(arrayOfDrivers);