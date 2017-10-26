var mac = 0;
var charlie = 0;
var dee = 0;
var dennis = 0;

$(document).ready(function() {
  $("#CharacterPicker").submit(function (event) {
    var mac1 = $("input:radio[name=mac1]:checked").val();
    var charlie1 = $("input:radio[name=charlie1]:checked").val();
    var charlie2 = $("input:radio[name=charlie2]:checked").val();
    var dee1 = $("input:radio[name=dee1]:checked").val();
    var dee2 = $("input:radio[name=dee2]:checked").val();
    var dennis1 = $("input:radio[name=dennis1]:checked").val();
    var dennis2 = $("input:radio[name=dennis2]:checked").val();
    var mac2 = $("input:radio[name=mac2]:checked").val();

    if (mac1 === "yes"){
      mac += 1;
    }

    if (charlie1 === "yes"){
      charlie += 1;
    }

    if (dee1 === "yes"){
      dee += 1;
    }

    if (dee2 === "yes"){
      dee += 1;
    }

    if (charlie2 === "yes"){
      charlie += 1;
    }

    if (dennis1 === "yes"){
      dennis += 1;
    }

    if (dennis2 === "yes"){
      dennis += 1;
    }

    if (mac2 === "yes"){
      mac += 1;
    }

    debugger;
    if (mac > dee && mac > charlie && mac > dennis) {
    $("#macCharacter").show();
    $("#deeCharacter").hide();
    $("#dennisCharacter").hide();
    $("#charlieCharacter").hide();
    $("#noCharacter").hide();
    } else if (dennis > dee && dennis > charlie && dennis > mac) {
    $("#macCharacter").hide();
    $("#deeCharacter").hide();
    $("#dennisCharacter").show();
    $("#charlieCharacter").hide();
    $("#noCharacter").hide();
    } else if (dee > mac && dee > charlie && dee > dennis) {
    $("#macCharacter").hide();
    $("#deeCharacter").show();
    $("#dennisCharacter").hide();
    $("#charlieCharacter").hide();
    $("#noCharacter").hide();
    } else if (charlie > dee && charlie > mac && charlie > dennis) {
    $("#macCharacter").hide();
    $("#deeCharacter").hide();
    $("#dennisCharacter").hide();
    $("#charlieCharacter").show();
    $("#noCharacter").hide();
    } else {
    $("#macCharacter").hide();
    $("#deeCharacter").hide();
    $("#dennisCharacter").hide();
    $("#charlieCharacter").hide();
    $("#noCharacter").show();
    };
    event.preventDefault();
  });
});
