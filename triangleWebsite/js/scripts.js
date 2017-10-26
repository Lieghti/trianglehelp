var side1 = parseInt($("#input1").val());
var side2 = parseInt($("#input2").val());
var side3 = parseInt($("#input3").val());

$(document).ready(function() {
  $("#triangle").submit(function (event) {
    event.preventDefault();
    if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2 ) {
    alert ("That's no triangle!");
    } else if (side1 != side2 && side2 != side3 && side1 != side3){
    alert ("You have an Scalene triangle!");
    } else if (side1 === side2 || side2 === side3 || side1 === side3){
      alert ("You have an Isosceles triangle!");
    } else if (side1 === side2 && side2 === side3 && side1 === side3){
    alert ("You have an Equilateral triangle!");
    }
  });
});
