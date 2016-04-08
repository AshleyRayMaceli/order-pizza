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
  $('input:checkbox').removeAttr('checked');
}

// User Interface Logic
$(document).ready(function(){

  $("#add-more-pizza").click(function(){
    $("#extra-pizzas").append('<p>___________________________________</p>' +
                              '<h2>Sizes</h2>' +
                              '<div class="another-pizza">' +
                              '<select class="form-control new-pizza-size">' +
                               '<option id="size1" value="10">Small - $10</option>' +
                               '<option id="size2" value="15">Medium - $15</option>' +
                               '<option id="size3" value="20">Large - $20</option>' +
                               '</select>' +
                               '<h2>Toppings</h2>' +
                               '<h3>$1 extra for each topping</h3>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">Extra Cheese</label>' +
                               '</div>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">Mushrooms</label>' +
                               '</div>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">Peppers</label>' +
                               '</div>' +
                               '<div class="checkbox">' +
                               '<label><input type="checkbox" name="toppings" value="1">Sausage</label>' +
                               '</div>' +
                               '</div>'
    );
  });

  $("#new-pizza-order").submit(function(event){
    event.preventDefault();

    var newAllOrders = new AllOrders ();

    $(".another-pizza").each(function() {
      var inputtedPizzaSize = parseInt( $(this).find( $("select.new-pizza-size") ) .val());
      var inputtedPizzaToppings = 0;
      var checkedBoxes = $(this).find( document.getElementsByName("toppings") );

      var newPizza = new Pizza(inputtedPizzaToppings, inputtedPizzaSize, checkedBoxes);

      newAllOrders.pizzaTotal.push(newPizza);

      newPizza.costOfToppings();

      var pizzaNumber = newAllOrders.pizzaTotal.indexOf(newPizza);
      console.log(pizzaNumber);
      console.log(newAllOrders.pizzaTotal);

      $("#pizza-price").append("<li> Pizza " + (pizzaNumber + 1) + ": $" + newPizza.costOfPizza() + "</li>");
      $("#show-pizza-results").show();
    });

    resetFields();

  });
});
