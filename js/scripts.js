$(document).ready(function() {
  $(".form-control").submit(function(event) {
    event.preventDefault();


    var iceCream = parseInt($("input#icecream option:selected").val());
    var macOr = parseInt($("input#or option:selected").val());
    var mineralsSelect = parseInt($("input#minerals option:selected").val());
    var semiColon = parseInt($("input#semi-colon option:selected").val());
    var basicSelect = parseInt($("input#basic option:selected").val());


    var total = iceCream + macOr + mineralsSelect + semiColon + basicSelect;
console.log(total);




if (total <= 4){
  alert ("please answer ALL the questions!");
} else if(total = 5 ){
  $(".ruby").show();
  $(".rust, .swift").hide();
}else if (total >= 6 && total <= 8 ) {
  $(".rust").show();
  $(".ruby, .swift").hide();
}else (total >= 9 ) {
  $(".swift").show();
  $(".ruby, .rust").hide();
}

 var result = total
$('#result').text(result);
$("#result").show();


  });
});
