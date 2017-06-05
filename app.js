
/*
let promiseToCleanRoom = new Promise(function (resolve,reject) {

    let isClean = false;

    if(isClean){
        resolve('Clean')
    }else{
        reject('not clean')
    }


});

promiseToCleanRoom.then(function (fromResolve) {
    console.log('the room is ',fromResolve)
}).catch(function (fromreject) {
    console.log('the room is ',fromreject)
})*/


let cleanRoom = function () {
    return new Promise(function (resolve,reject) {
        resolve(' cleaned the room')
    });
};

let cleanGarbej = function (message) {
    return new Promise(function (resolve,reject) {
        resolve(message +' remove garbej')
    });
};

let iceCreamWin = function (message) {
    return new Promise(function (resolve,reject) {
        resolve(message +' won icecream')
    });
};

cleanRoom().then(function (result) {
    //console.log('result',result)
    return cleanGarbej(result)
}).then(function (result) {
    //console.log('result',result)
    return iceCreamWin(result)
}).then(function (result) {
   // console.log('result',result)
    console.log('finished',result)
})





