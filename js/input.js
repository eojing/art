
const check_box = document.querySelector('.check_box');
const check_box_img_off = document.querySelector('.check_box_img_off');
const check_box_img_on = document.querySelector('.check_box_img_on');
const btn_okay = document.querySelector('.btn_okay');
const btn_fade = document.querySelector('.btn_fade');
const popup_back = document.querySelector('.popup_back');
const popup = document.querySelector('.popup_wrap');
const sum_btn = document.querySelector('.sum_btn');
const btn_cancel = document.querySelector('.btn_cancel');

console.log(popup.offsetHeight)

sum_btn.addEventListener('click',function(){
    popup_back.classList.add('popup_back_on');
    popup.style.top = 100 + '%'
    console.log('click')
});

check_box.addEventListener('click',function(){
    if(check_box.classList.contains('check_box_on')){
        check_box.classList.remove('check_box_on');
        check_box_img_off.style.display = 'block';
        check_box_img_on.style.display = 'none';
        btn_fade.style.display = 'block'


    }else{
        check_box.classList.add('check_box_on');
        check_box_img_off.style.display = 'none';
        check_box_img_on.style.display = 'block';
        btn_fade.style.display = 'none'

    }
});

btn_cancel.addEventListener('click',function(){
    popup.style.top = 200 + '%'
    popup_back.classList.remove('popup_back_on');
});


// 계좌번호 최대숫자 제한 부분
//         function maxLengthCheck(object){
//             if (object.value.length > object.maxLength){
//                 object.value = object.value.slice(0, object.maxLength);
//     }
// }


// textarea height값 변환 부분
// const DEFAULT_HEIGHT = 30; // textarea 기본 height

// const textarea = document.querySelector('.text-area');

// textarea.oninput = (event) => {
//   const target = event.target;

//   target.style.height = 0;
//   target.style.height =  target.scrollHeight + 'px';
// };



// 계좌번호 포커스 부분
// const first = document.querySelector('.account_number_first');
// const second = document.querySelector('.account_number_second');
// const third = document.querySelector('.account_number_third');


// first.addEventListener('keyup', function(){
//     if(first.value.length == first.maxLength){
//         second.focus();
//     }    
// })

// second.addEventListener('keyup', function(){
//     if(this.value.length == this.maxLength){
//         third.focus();
//     }

// })

