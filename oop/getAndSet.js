class Temperature {
    constructor(celsius){
        this._ceslsius = celsius
    }

    get celsius(){
        return this._ceslsius
    }
    get fahrenheit() {
        return this._ceslsius * 9 / 5 + 32;
    }
        

    set celsius(value) {
        if (value < -273.15) {
            console.log("Temperature below absolute zero is not possible.");
        return;
        }
        this._ceslsius = value;
    }
        
    
}

const temp = new Temperature(32)
console.log(temp.celsius)
temp.celsius = 40
console.log(temp.celsius)
temp.celsius = -277
console.log(temp.celsius)
console.log(temp.fahrenheit)