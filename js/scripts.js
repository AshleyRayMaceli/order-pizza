// Business Logic
function AllOrders () {
  this.pizzaTotal = [];
}

function Pizza (toppings, size, chosen) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
  this.chosenToppings = chosen;
  // this.pizzaTotal = [];
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

function resetFields() {
  $("select.new-pizza-size").val("");
  $("input.checkbox").val();
}

// User Interface Logic
$(document).ready(function(){

  $("#add-more-pizza").click(function(){
    $("#extra-pizzas").append('<p>___________________________________</p>' +
                              '<div class="another-pizza">' +
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
                               '</div>' +
                               '</div>'
    );
  });

  $("#new-pizza-order").submit(function(event){
    event.preventDefault();

    $(".another-pizza").each(function() {
      var inputtedPizzaSize = parseInt( $(this).find( $("select.new-pizza-size") ) .val());
      var inputtedPizzaToppings = 0;
      var checkedBoxes = $(this).find( document.getElementsByName("toppings") );

      var newPizza = new Pizza(inputtedPizzaToppings, inputtedPizzaSize, checkedBoxes);
      var newAllOrders = new AllOrders();

      newAllOrders.pizzaTotal.push(newPizza)

      newPizza.costOfToppings()

      $("h1#pizza-price").append("$" + newPizza.costOfPizza());
      $("#show-pizza-results").show();
      console.log(newAllOrders.pizzaTotal);
    });

    // resetFields()

  });
});
