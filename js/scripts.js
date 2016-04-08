// Business Logic
function Pizza (toppings, size, chosen) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
  this.chosenToppings = chosen;
}

Pizza.prototype.costOfToppings = function (chosen, toppings) {
    for (i = 0; i < this.chosenToppings.length; i += 1) {
      if (this.chosenToppings[i].checked) {
        this.pizzaToppings += 1;
      }
    }
}

Pizza.prototype.costOfPizza = function (toppings, size) {
  var pizzaPrice = this.pizzaToppings + this.pizzaSize;
  return pizzaPrice;
}

// User Interface Logic
$(document).ready(function(){
  $("#new-pizza-order").submit(function(event){
    event.preventDefault();

    var inputtedPizzaSize = parseInt( $("select.new-pizza-size").val() );
    var inputtedPizzaToppings = 0;
    var checkedBoxes = document.getElementsByName("toppings");

    var newPizza = new Pizza(inputtedPizzaToppings, inputtedPizzaSize, checkedBoxes);

    newPizza.costOfToppings()

    $("h1#pizza-price").text("$" + newPizza.costOfPizza());
  });
});



// User can order a pizza
// User picks one or more toppings
// User selects size


// for multiple toppings use a switch inside a FOR loop
// interate through an array
// make empty array with corresponding number of empty spots for toppings ??
// or just make every topping the same price, iterate through and add $1 for length of array
