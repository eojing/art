
// 사진첨부 선택
const upload_img = document.querySelector('.upload_img');

// 사진첨부 -> 사진 제거 선택 
const fade_img = document.querySelector('.fade_img');

// 사진 삭제 선택자
const img_delete = document.querySelector('.img_delete');





// input[type="text"] 글자 제거

const input_text_delete = document.querySelectorAll('.input_text_delete');
const input_text = document.querySelectorAll('.input_text');

input_text[0].addEventListener('keyup',function(){
    if(this.value.length > 0){
        input_text_delete[0].classList.add('input_text_delete_on')
    }
})
input_text[1].addEventListener('keyup',function(){
    if(this.value.length > 0){
        input_text_delete[1].classList.add('input_text_delete_on')
    }
})
input_text[2].addEventListener('keyup',function(){
    if(this.value.length > 0){
        input_text_delete[2].classList.add('input_text_delete_on')
    }
})
input_text[3].addEventListener('keyup',function(){
    if(this.value.length > 0){
        input_text_delete[3].classList.add('input_text_delete_on')
    }
})

input_text[4].addEventListener('keyup',function(){
    if(this.value.length > 0){
        input_text_delete[4].classList.add('input_text_delete_on')
    }
})
input_text[5].addEventListener('keyup',function(){
    if(this.value.length > 0){
        input_text_delete[5].classList.add('input_text_delete_on')
    }
})

console.log(input_text.length)
console.log(input_text_delete.length)

input_text_delete[0].addEventListener('click',function(){
    input_text[0].value = '';
    this.classList.remove('input_text_delete_on');
})
input_text_delete[1].addEventListener('click',function(){
    input_text[1].value = '';
    this.classList.remove('input_text_delete_on');
})
input_text_delete[2].addEventListener('click',function(){
    input_text[2].value = '';
    this.classList.remove('input_text_delete_on');
})
input_text_delete[3].addEventListener('click',function(){
    input_text[3].value = '';
    this.classList.remove('input_text_delete_on');
})
input_text_delete[4].addEventListener('click',function(){
    input_text[4].value = '';
    this.classList.remove('input_text_delete_on');
})
input_text_delete[5].addEventListener('click',function(){
    input_text[5].value = '';
    this.classList.remove('input_text_delete_on');
})




// 자녀 추가, 제거

const add_btn1 = document.querySelector('.add_btn1');
const add_btn2 = document.querySelector('.add_btn2');
const kid_delete = document.querySelector('.kid_delete');
const input_box1 = document.querySelector('.input_box1');
const input_box2 = document.querySelector('.input_box2');
const input_tag = document.querySelectorAll('.input_tag');
const add_btn_arrow_up = document.querySelector('.add_btn_arrow_up');
const add_btn_arrow_down = document.querySelector('.add_btn_arrow_down');

add_btn1.addEventListener('click',function(){
    this.style.display = 'none';
    add_btn2.style.display = 'flex';
    input_box1.classList.remove('.mH100');
    input_box1.classList.remove('.mH0');
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
    input_box1.classList.remove('mH100');
    input_box1.classList.remove('mH0');
    this.style.display = 'none';
    input_tag[0].innerHTML = "자녀 성명"
    input_tag[1].innerHTML = "자녀 계좌번호 (참여상 혜택 지급용)"
    if(input_box2.classList.contains('mH100')){
        input_box2.classList.remove('mH100');
    }
});




// 자녀 2 보기
add_btn2.addEventListener('click',function(){
    add_btn_arrow_down.classList.toggle('btn_on');
    add_btn_arrow_up.classList.toggle('btn_on');
    
    if(add_btn_arrow_down.classList.contains('btn_on')){
        input_box1.classList.remove('mH100');
        input_box2.classList.add('mH100');
    }else{
        input_box2.classList.remove('mH100');
        input_box1.classList.add('mH100');
    }
})




// 팝업 영역

const popup_back = document.querySelector('.popup_back');
const popup = document.querySelector('.popup_wrap');
const sum_btn = document.querySelector('.sum_btn');
const btn_okay = document.querySelector('.btn_okay');
const btn_cancel = document.querySelector('.btn_cancel');
const check_box = document.querySelector('.check_box');
const check_box_img_off = document.querySelector('.check_box_img_off');
const check_box_img_on = document.querySelector('.check_box_img_on');

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
        btn_okay.classList.add('off')
    }else{
        check_box.classList.add('check_box_on');
        check_box_img_off.style.display = 'none';
        check_box_img_on.style.display = 'block';
        btn_okay.classList.remove('off')

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

