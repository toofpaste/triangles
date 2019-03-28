$(function() {
  $("#userinput").submit(function(event){
		var side1 = parseInt($("#side1").val());
		var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if (side1 + side2 >= side3 && side1 + side3 >= side2 && side2 + side3 >= side1 && side1 !== 0 && side2 !== 0 && side3 !== 0) {
      if (side1 === side2 && side1 === side3 && side2 === side3) {
          $("#triangleoutput").text("This is an equilateral triangle.")
      } else if (side1 === side2 || side1 === side3 || side2 === side3) {
                $("#triangleoutput").text("This is an isosceles triangle.")
              } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
                        $("#triangleoutput").text("This is a scalene triangle.")
                      };
            }else $("#triangleoutput").text("This is not a triangle.");
    event.preventDefault();
  });
});
