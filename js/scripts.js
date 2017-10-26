$(document).ready(function() {
  $("#input").submit(function(event) {
    //equilateral
    // should probably declare variables and assign them input values and then work with variables instead of direct input value
    if (number1 === number2 && number2 === number3 && number1 === number3) {
      $("#equilateral").show();
    } /*else if (number1 != number2 && number2 != number3 && number1 != number3) {
      $("#scalene").show();
    } //else if  )


    //isoceles



    //scalene


    //none



*/
  event.preventDefault();
  });


});
