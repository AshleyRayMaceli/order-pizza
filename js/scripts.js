// Business Logic
function Pizza (size, toppings) {
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Pizza.prototype.costOfPizza = function (size, toppings) {
  var pizzaPrice = this.pizzaSize + this.toppings;
  return pizzaPrice;
}

// User Interface Logic
$(document).ready(function(){
  $("#new-pizza-order").submit(function(event){
    event.preventDefault();

    var inputtedPizzaSize = parseInt( $("select.new-pizza-size").val() );
    var inputtedPizzaToppings = 0;

    var checkedBoxes = document.getElementsByName("toppings");
    for (i = 0; i < checkedBoxes.length; i += 1) {
      if (checkedBoxes[i].checked) {
        // var allToppings = parseInt( $("") )
        inputtedPizzaToppings += 1;
      }
    }

    var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaToppings);

    $("h1#pizza-price").text("$" + newPizza.costOfPizza());

    console.log(inputtedPizzaSize);
    console.log(inputtedPizzaToppings);
    console.log(newPizza);
  });
});



// User can order a pizza
// User picks one or more toppings
// User selects size

// radio checked buttons for multiple toppings?
// use switches

// for multiple toppings use a switch inside a FOR loop
// interate through an array
// make empty array with corresponding number of empty spots for toppings ??
// or just make every topping the same price, iterate through and add $1 for length of array
