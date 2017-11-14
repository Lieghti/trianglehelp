
$(document).ready(function() {
  $("#triangle").submit(function (event) {
    event.preventDefault();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    console.log(side1, side2, side3);
    if ((side1 + side2) <= side3 || (side2 + side3) <= side1 || (side1 + side3) <= side2 ) {
    alert ("That's no triangle!");
    } else if (side1 != side2 && side2 != side3 && side1 != side3){
    alert ("You have an Scalene triangle!");
    } else if (side1 === side2 && side2 === side3 && side1 === side3){
    alert ("You have an Equilateral triangle!");
    } else if (side1 === side2 || side2 === side3 || side1 === side3){
    alert ("You have an Isosceles triangle!");
    }
  });
});
