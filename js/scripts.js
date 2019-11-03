
//Frontend Logic
$(document).ready(function() {
  $("form#question").submit(function(event) {
    event.preventDefault();


    var iceCream = parseInt($("select#icecream").val());
    var macOr = parseInt($("select#or").val());
    var mineralsSelect = parseInt($("select#minerals").val());
    var semiColon = parseInt($("select#semi-colon").val());
    var basicSelect = parseInt($("select#basic").val());

// console.log(iceCream);
// console.log(macOr);
// console.log(mineralsSelect);
// console.log(semiColon);
// console.log(basicSelect);
    //Backend logic



    var total = iceCream + macOr + mineralsSelect + semiColon + basicSelect;
    if (total <= 4){
      alert ("please answer ALL the questions!");
    } else if(total === 5 ){
      $(".ruby").show();
      $(".rust, .swift").hide();
    } else if (total >= 6 && total <= 8 ) {
      $(".rust").show();
      $(".ruby, .swift").hide();
    } else {
      console.log(total);
      $(".swift").show();
      $(".ruby, .rust").hide();
    }

// console.log(total);
    $('#answer').show();
    // $("#result").show();


  });
});
