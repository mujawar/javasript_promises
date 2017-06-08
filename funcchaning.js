/**
 * Created by arif on 08/06/17.
 */

// //method chaning
//
// var obj = function () {
//     this.i = 0;
//
//     this.add = function (i) {
//         this.i += i;
//         console.log('a',this.i)
//         return this;
//     };
//
//     this.sub = function (i) {
//         this.i -= i;
//         console.log('b',this.i)
//         return this;
//     };
//
//     this.print = function () {
//        console.log(this.i);
//     };
// };
//
// var x = new obj();
// //x.add(3);
// //x.sub(2);
// //console.log(x.add(3));
// x.add(3).sub(2).print();



//method chaning

var obj = function () {
    var i = 0;

    var add = function (j) {
         i += j;
        console.log('a',i)
        return this;
    };

    var sub = function (j) {
      i -= j;
        console.log('b',i)
        return this;
    };

    var print = function () {
        console.log(i);
    };

    return {add:add,sub:sub,print:print}
};

var x =  obj();

x.add(3).sub(2).print();