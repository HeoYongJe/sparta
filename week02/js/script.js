
// const $jahoBtn = document.querySelector('.jahoBtn');

// let num = 0;
// $jahoBtn.onclick = function(){
//   num += 1;
//   if(num % 2 === 0) {
//       alert('짝짝짝');
//   } else{
//       alert('홀홀홀');
//   }
//       $jahoBtn.style.color = 'red'
// }

// const $primaryBtn = document.getElementById('primaryBtn');
// const $postBox = document.getElementById('postBox');

function openclose() {
  let status = $('#postBox').css('display')
  if (status == 'block') {
      $('#postBox').hide()
      $('#primaryBtn').text('포스팅박스 열기')
  } else {
      $('#postBox').show()
      $('#primaryBtn').text('포스팅박스 닫기')
  }
}
