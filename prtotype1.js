/**
 * Created by arif on 07/06/17.
 */


//var x = new Object();

//var y = {};

/*var pizza = {
    crust:"thin",
    toppings:3,
    hasBacon:true,

    howmanyToppings:function () {
        return this.toppings;
    }
};

pizza.price = "12$";

//console.log(pizza);
//console.log(pizza.hasBacon);

delete(pizza.crust);
console.log(pizza);*/

/////////

/*var pizza = function () {
   this.crust = 'thin';
    this.toppings = 3;
      this.beacans = true
};

var x = new pizza();
var y = new pizza();

x.crust = "pen";

console.log(x.toppings);
console.log(x.crust);

console.log(y.crust);

console.log(y instanceof pizza);
console.log(y.constructor);*/


////////////

/*var pizza = function () {
   var crust = "thin";
   this.hasBacon = true;
   var toppings =3;


   this.getHasBacon = function () {
       return this.hasBacon;
   };

   this.getCrust = function () {
       return crust;
   }

   var getToppins = function () {
       return toppings;
   }


       
};

var pizzaA = new pizza();
console.log(pizzaA.getHasBacon());

console.log(pizzaA.getCrust());


console.log(pizzaA.getToppings());*/

///////////////


var pizza = function () {
    var toppings =3;

    var getToppins = function () {
        return toppings;
    };

    var temp = {};
    temp.getToppins = getToppins;
    return temp;
};

var pizzaA = new pizza();

console.log(pizzaA.getToppins());


