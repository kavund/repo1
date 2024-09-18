
function readFile(onSuccess, onFailure){
    try {
        const ms = Date.now()
        console.log(ms)
        if(ms % 2 !==0) throw new Error("Something went wrong")
        onSuccess()
    }catch (e){
        console.log(e.message)
        onFailure()
    }
}


const onSuccess = ()=> console.log("Success")
const onError = ()=> console.log("Fail")
readFile(onSuccess, onError)