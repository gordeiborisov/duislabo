// Calculate velocity and amount of change
// Assuming 'position' and 'time' are defined elsewhere

let initialPosition = 0; // Initial position
let finalPosition = 100; // Final position after some time
let initialTime = 0; // Initial time
let finalTime = 10; // Final time after some interval

// Calculate velocity (change in position over change in time)
let velocity = (finalPosition - initialPosition) / (finalTime - initialTime);

// Calculate amount of change (total change in position)
let amountOfChange = finalPosition - initialPosition;

console.log("Velocity:", velocity);
console.log("Amount of change:", amountOfChange);
