//범용 Semantic ui 사용
$('.ui.modal')
  .modal('show')
;

$('.tool-tip').popup();


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

//-- Index 예약 홈 --//

// 좌석 선택
select_seat = (item) => {
  document.getElementById("select_seat").textContent  = document.getElementById(item).innerText ;  
  document.getElementById("show_cal").classList.remove("d-none");
}

// 시간 선택
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

// 날짜 선택
select_days = (item) => {
  document.getElementById("_days_added").textContent  = item;  
  document.getElementById("_days_t").classList.remove("d-none"); 
  show_pay_box();
}

// 결제창 보이기
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
}

// 사물함
select_weeks_locker = (item) => {
  document.getElementById("_locker_weeks").textContent  = item;
  document.getElementById("locker-cal").classList.remove("d-none");
}


//// -----가입 join------////
// 인증번호 카톡 확인 안내
confirm_kakao_msg = () =>{
  document.getElementById("confirm_msg").classList.remove("d-none");
}
  

function uncheck(){
  document.getElementById("red").checked = false;
}


// 핸드폰 번호에 "-" 짝대기 자동으로 넣기
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




