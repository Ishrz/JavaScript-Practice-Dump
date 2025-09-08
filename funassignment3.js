//fix written function using early return

function checkAge(age) {
    if (age < 18) return "Too young";
    return "Allowed";
    
}

console.log(checkAge(17));