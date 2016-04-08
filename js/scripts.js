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
  $("#add-more-pizza").click(function(){
    $("#another-pizza").append('<p>___________________________________</p>' +
                              '<select class="form-control new-pizza-size">' +
                               '<option id="size1" value="10">Small</option>' +
                               '<option id="size2" value="15">Medium</option>' +
                               '<option id="size3" value="20">Large</option>' +
                               '</select>' +
                               '<h2>Toppings:</h2>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">Topping 1</label>' +
                               '</div>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">Topping 2</label>' +
                               '</div>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">Topping 3</label>' +
                               '</div>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">Topping 4</label>' +
                               '</div>'
    );
  });

  $("#new-pizza-order").submit(function(event){
    event.preventDefault();

    var inputtedPizzaSize = parseInt( $("select.new-pizza-size").val() );
    var inputtedPizzaToppings = 0;
    var checkedBoxes = document.getElementsByName("toppings");

    var newPizza = new Pizza(inputtedPizzaToppings, inputtedPizzaSize, checkedBoxes);

    newPizza.costOfToppings()

    $("h1#pizza-price").text("$" + newPizza.costOfPizza());
    $("#show-pizza-results").show();
  });
});
