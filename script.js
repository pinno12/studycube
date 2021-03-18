
$('.ui.modal')
  .modal('show')
;

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })
  
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


select_first = (item) => {
  document.getElementById("select_first").textContent  = document.getElementById(item).innerText ;  
  document.getElementById("show_cal").classList.remove("d-none");
}


select_hour = (item) => {
  document.getElementById("select_hour").textContent  = document.getElementById(item).innerText;
  document.getElementById("show_seat").classList.remove("d-none"); 
}

// fianl step
select_times = (item) => { 
  document.getElementById("_time_added").textContent  = item;
  document.getElementById("_times").classList.remove("d-none");
  show_pay_box();
}

select_days = (item) => {
  document.getElementById("_days_added").textContent  = item;  
  document.getElementById("_days_t").classList.remove("d-none"); 
  show_pay_box();
}


show_pay_box = () =>{
  document.getElementById("pay-box").classList.remove("d-none");
}

show_pays = (item) =>{
  document.getElementById("pills-tabContent").classList.remove("d-none");
  

  switch (item){
    case 'pills-home-tab':      
      document.getElementById("time_pay").style.display = "block";
      document.getElementById("pay-detail-s").style.display = "block";
      document.getElementById("_times").style.display = "none";
      document.getElementById("_days_t").style.display = "none";
      document.getElementById("pay_locker").style.display = "none";
      break;
    case 'pills-profile-tab':
      document.getElementById("time_pay").style.display = "none";
      document.getElementById("pay-detail-s").style.display = "none";
      document.getElementById("_times").style.display = "block";
      document.getElementById("_days_t").style.display = "none";
      document.getElementById("pay_locker").style.display = "none";
      break;
    case 'pills-contact-tab':
      document.getElementById("time_pay").style.display = "none";
        document.getElementById("pay-detail-s").style.display = "none";
        document.getElementById("_times").style.display = "none";
        document.getElementById("_days_t").style.display = "block";
        document.getElementById("pay_locker").style.display = "none";
        break;
    case 'pills-4-tab':
      document.getElementById("time_pay").style.display = "none";
        document.getElementById("pay-detail-s").style.display = "none";
        document.getElementById("_times").style.display = "none";
        document.getElementById("_days_t").style.display = "none";
        document.getElementById("pay_locker").style.display = "block";
  
    }


  // if (item == 'pills-home-tab'){
  //   document.getElementById("time_pay").style.display = "block";
  // }else{
  //   document.getElementById("time_pay").style.display = "none";
  // }

  // document.getElementById("pay-detail-s").innerHTML = ""
  // document.getElementById("_times").innerHTML = ""
  // document.getElementById("_days_t").innerHTML = ""
    
  }

select_weeks_locker = (item) => {
  document.getElementById("_locker_weeks").textContent  = item;
  document.getElementById("locker-cal").classList.remove("d-none");
}

confirm_kakao_msg = () =>{
  document.getElementById("confirm_msg").classList.remove("d-none");
}
  

function uncheck() {
  document.getElementById("red").checked = false;
}


$('.ui.checkbox')
  .checkbox()
  ;

  $('.menu .item')
  .tab()
;

$('.accordion')
  .accordion({
    selector: {
      trigger: '.title'
    }
  })
;

window.addDashes = function addDashes(f) {
  var r = /(\D+)/g,
      npa = '',
      nxx = '',
      last4 = '';
  f.value = f.value.replace(r, '');
  npa = f.value.substr(0, 3);
  nxx = f.value.substr(3, 4);
  last4 = f.value.substr(7, 4);
  f.value = npa + '-' + nxx + '-' + last4;

}

add_dashes = (item) =>{
  f = document.getElementById(item).replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
  f.sub
}




