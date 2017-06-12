/**
 * Created by arif on 10/06/17.
 */

//call
/*var object = {num:2};
var addTotTis = function (a) {

    return this.num + a;

};
console.log(addTotTis.call(object,4));*/

/*var object = {num:2};
var addTotTis = function (a,b,c) {
    return this.num + a + b + c;
};
var narray = [1,2,3];
console.log(addTotTis.call(object,1,2,3));*/

//aaply

/*
var object = {num:2};
var addTotTis = function (a,b,c) {
    return this.num + a + b + c;
};
var narray = [1,2,3];
console.log(addTotTis.apply(object,narray));
*/

//applt

/*
var object1 = {num:2};
var object2 = {num:5};
var addTotTis = function (a,b,c) {
    return this.num + a + b + c;
};
var narray = [1,2,3];

console.log(addTotTis.apply(object1,narray));
console.log(addTotTis.apply(object2,narray));*/

//bind

/*
var object1 = {num:2};
var addTotTis = function (a,b,c) {
    return this.num + a + b + c;
};
var narray = [1,2,3];

var bound = addTotTis.bind(object1);
console.log(bound(1,2,3));
*/


var object1 = {num:2};
var addTotTis = function (a,b,c) {
    return this.num + a + b + c;
};
var narray = [1,2,3];

var bound = addTotTis.bind(object1);
console.log(bound(1,2,3));
