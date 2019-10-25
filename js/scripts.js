$(document).ready(function() {

  $(".form-control").submit(function(event) {
    event.preventDefault();
    var iceCream = $("input#ice option:selected").val();
    var jewels = document.getElementById('rocks').val();
    var basic = document.getElementById('plain').val();
    var comp = $(".type option:selected").val();






if (iceCream === 1){
  $(".ruby").show();
  $(".rust, .swift").hide();
}else if (iceCream === 2) {
  $(".rust").show();
  $(".ruby, .swift").hide();
}



  });
});
