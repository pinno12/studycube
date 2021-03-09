
$('.ui.modal')
  .modal('show')
;



  
$('.tool-tip').popup();

function bg_change(color) {
  $(".ui.button.full-width.items").removeClass("bg-e");
  document.getElementById(color).classList.add("bg-e");
  document.getElementById("item-name").textContent = color;
  document.getElementById("item-name2").textContent = color;
}

function smartkey(item) {
  item = item || "2003051"; // default

  $(".item").removeClass("active");
  document.getElementById(item).classList.add("active");
  document.getElementById('myQr_' + item).classList.add("d-none");
  
  $("#selected").empty();
  $("#" + item).clone().appendTo("#selected")

  document.getElementById('myQr_' + item).classList.remove("d-none");
}




$('.ui.checkbox')
  .checkbox()
  ;

  $('.menu .item')
  .tab()
;


$('.input-field').focus(function () {
  $(this).prev().addClass('focus');


  if ($(this).val().length == '') {
    $(this).prev().addClass('has-value');
  }


});
$('.input-field').blur(function () {
  $(this).prev().removeClass('focus');
  if ($(this).val() == 0) {
    $(this).prev().removeClass('has-value');
  }
});







