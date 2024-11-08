let setofnumbers = [9, 4, 2, 8, 5];
console.log(setofnumbers);
const target = 11;

function additionfunc(setofnumbers, target) {
    for (let i = 0; i < setofnumbers.length; i++) {
        for (let j = i + 1; j < setofnumbers.length; j++) {
            if (setofnumbers[i] + setofnumbers[j] === target) {
                console.log(`Numbers: ${setofnumbers[i]} and ${setofnumbers[j]} add up to ${target}`);
                return;
            }
        }
    }
    console.log("No pair found.");
}

additionfunc(setofnumbers, target);