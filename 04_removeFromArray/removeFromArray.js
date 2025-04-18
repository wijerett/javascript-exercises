



const removeFromArray = function(arrayLike, ...valuesToRemove) {

    
    const array = Array.from(arrayLike);



    return array.filter(item => !valuesToRemove.includes(item));
};


// Do not edit below this line
module.exports = removeFromArray;