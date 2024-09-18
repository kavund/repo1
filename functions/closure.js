

function multiplier(factor){
    return function(x) {
        return x * factor;
    };
}

const double = multiplier(2)
console.log(double(2))
console.log(double(3))
console.log(double(5))
