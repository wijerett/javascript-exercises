const sumAll = function(start, end) {

    if (typeof start !== 'number' || typeof end !== 'number') {
        return 'ERROR';
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return 'ERROR';
    }
    if (start < 0 || end < 0) {
        return 'ERROR';
    }

    const [min, max] = start < end ? [start, end] : [end, start];

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
