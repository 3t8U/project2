$(document).ready(function() {

  $(".form-control").submit(function(event) {
    event.preventDefault();
      var age = $("input#born").val();

if (age > 21){
  $(".ruby").show();
  $(".rust, .swift").hide();
}else if (age < 23) {
  $(".rust").show();
  $(".ruby, .swift").hide();
}else if (age === 22) {
  $(".swift").show();
  $(".ruby, .rust").hide();
} else {
  console.log("error");
}



  });
});
