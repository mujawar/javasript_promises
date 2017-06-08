/**
 * Created by arif on 07/06/17.
 */

/////closers/////

/*
var pass = 3;
function add() {
    var inner = 3;
  return pass + inner
};

console.log(add()
)
*/


/*

var pass = 5;
function add() {
    var inner = 3;
    return pass + inner
};

 console.dir(add);
console.log(add());

var pass = 1;

console.log(add());*/




/*var addTo = function(passed) {

   var add =  function (inner) {
      return passed + inner;
    }
    return add;
};

var a =  new addTo(5);
var b  =  new addTo(1);

console.log(a(3));
console.log(b(3));*/


function addTo() {
    var passed = 3;
     function add() {
        var inner = 1;
        return passed + inner;
    }
    return add();
};

console.log(addTo());





