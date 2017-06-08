/**
 * Created by arif on 07/06/17.
 */

/////// javasript prortotyping/////

 var x = function (j) {
     this.i = 0;
     this.j = j;

    /* this.getJ = function () {
         return this.j;
     };*/
};

 x.prototype.getJ = function () {
     return this.j
 };

 var x1 = new x(1);
 var x2 = new x(2);

 //console.log(x1.getJ());
//console.log(x2.getJ());

// every object is created from master object


