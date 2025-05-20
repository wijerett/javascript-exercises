const fibonacci = function(fib) {

    if (!Number.isInteger(fib)) {
        Error("OOPS");
    }

    if (fib < 0) {
        return ("OOPS");
    }

    if (fib == 0) {
        return 0;
    }
    if (fib === 1 || fib === 2) {
        return 1;
    }
    let prev = 1, curr = 1;

    for (let i = 3; i <= fib; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;

}

// Do not edit below this line
module.exports = fibonacci;
