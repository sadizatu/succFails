let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if(num < 5) {
        resolve("YAH!!!");
    } else {
        reject("ooooh nooo !!!");
    }
});
const handlerSuccess = (resolveValue) => {
    console.log(resolveValue);
};
const handlerFailure = (rrejectionReason) => {
    console.log(rrejectionReason);
};
prom.then(handlerSuccess, handlerFailure);