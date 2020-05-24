const $orderBtn = document.querySelector('.orderBtn');

  $orderBtn.onclick = function orderArea() {
    let name = $('#orderName').val();
    let quantity = $('#quantity').val();
    let address = $('#address').val();
    let phoneNumber = $('#phoneNumber').val();

    if(name == ''){
        alert('이름을 입력하시오');
        $('#orderName').focus()
        return
    } else if(quantity == ''){
        alert('수량을 입력하시오');
        $('#orderName').focus()
        return
    } else if(address == ''){
        alert('주소를 입력하시오');
        $('#orderName').focus()
        return
    } else if(phoneNumber == ''){
        alert('전화번호를 입력하시오')
        $('#orderName').focus()
        return
    } else{
        alert('주문이 완료 되었습니다');
      }
  };

//   $(document).ready(function(){
//     $.ajax({
//         type: "GET",
//         url: "https://api.manana.kr/exchange/rate.json",
//         data: {},
//         success: function (reLoad) {
//             for(let i=0;i < reLoad.length;i++){
//                 $('#exchange').append(reLoad[i]['rate']);
//             }
//         }
//     })
//   });

  $(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "https://api.manana.kr/exchange/rate.json",
        data: {},
        success: function (reLoad) {
            for(let i=0;i < reLoad.length;i++){
                if(reLoad[i]['name'] == 'USDKRW=X') {
                    $('#exchange').append(reLoad[i]['rate']);
                }
            }
        }
    })
  });

