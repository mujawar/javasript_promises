/**
 * Created by arif on 05/06/17.
 */
/**
 * Created by arif on 05/06/17.
 */

let cleanRoom = function () {
    return new Promise(function (resolve,reject) {
        resolve('room cleaned')
    })

};

let cleanGarbej = function () {
    return new Promise(function (resolve,reject) {
        resolve('cleanGarbej  cleaned')
    })

};

let iceCreamWon = function () {
    return new Promise(function (resolve,reject) {
        resolve('iceCreamWon won')
    })

};


Promise.all([cleanRoom(),cleanGarbej(),iceCreamWon()]).then(function (result) {
    console.log('finished',result)

})


