$(document).ready(function() {

  $(".form-control").submit(function(event) {
    event.preventDefault();
      var iceCream = $("input#ice option:selected").val();
console.log()

if (iceCream === 1){
  $(".ruby").show();
  $(".rust, .swift").hide();
}else if (iceCream === 2) {
  $(".rust").show();
  $(".ruby, .swift").hide();
// }else if (age === 22) {
//   $(".swift").show();
//   $(".ruby, .rust").hide();
// } else {
  console.log("error");
}



  });
});
