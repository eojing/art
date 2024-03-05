
const check_box = document.querySelector('.check_box');
const check_box_img_off = document.querySelector('.check_box_img_off');
const check_box_img_on = document.querySelector('.check_box_img_on');
const btn_okay = document.querySelector('.btn_okay');
const btn_fade = document.querySelector('.btn_fade');
const popup_back = document.querySelector('.popup_back');
const popup = document.querySelector('.popup_wrap');
const sum_btn = document.querySelector('.sum_btn');
const btn_cancel = document.querySelector('.btn_cancel');
const add_btn1 = document.querySelector('.add_btn1');
const add_btn2 = document.querySelector('.add_btn2');
const add_btn_img = document.querySelector('.add_btn_img');
const add_btn_arrow_up = document.querySelector('.add_btn_arrow_up');
const add_btn_arrow_down = document.querySelector('.add_btn_arrow_down');
const input_box1 = document.querySelector('.input_box1');
const input_box2 = document.querySelector('.input_box2');
const kid_delete = document.querySelector('.kid_delete');
const input_tag = document.querySelectorAll('.input_tag');


add_btn1.addEventListener('click',function(){
    this.style.display = 'none';
    add_btn2.style.display = 'flex';
    input_box1.classList.add('mH0');
    input_box2.classList.add('mH100');
    kid_delete.style.display = 'block';
    input_box2.style.marginTop = 8.3333 + 'vw';
    input_tag[0].innerHTML = "자녀1 성명"
    input_tag[1].innerHTML = "자녀1 계좌번호 (참여상 혜택 지급용)"
});

kid_delete.addEventListener('click',function(){
    add_btn1.style.display = 'flex';
    add_btn2.style.display = 'none';
    this.style.display = 'none';
    input_tag[0].innerHTML = "자녀 성명"
    input_tag[1].innerHTML = "자녀 계좌번호 (참여상 혜택 지급용)"
    if(input_box2.classList.contains('mH100')){
        input_box2.classList.remove('mH100');
    }
    if(input_box1.classList.contains('mH0')){
        input_box1.classList.add('mH100');
    }
});

add_btn2.addEventListener('click',function(){
    add_btn_arrow_down.classList.toggle('btn_on');
    add_btn_arrow_up.classList.toggle('btn_on');
    
    if(add_btn_arrow_down.classList.contains('btn_on')){
        input_box1.classList.remove('mH100');
        input_box1.classList.add('mH0');
    }else{
        input_box1.classList.remove('mH0');
        input_box1.classList.add('mH100');
    }
})


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

