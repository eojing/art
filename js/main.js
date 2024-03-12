const bottom_btn = document.querySelectorAll('.fixed_btn');


// 상단으로 이동
const fixed_btn_bg = document.querySelector('.fixed_btn_bg');
const fixed_top = document.querySelector('.fixed_top')


fixed_top.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({top : 0, behavior: 'smooth'});
});


// 상단탭 클릭시 이동

const tab = document.querySelector('.tab');
const tab_list = document.querySelectorAll('.tab_list');
const tab_wrap = document.querySelector('.tab_wrap');
const content = document.querySelector('.content_wrap');
const content_list = document.querySelectorAll('.content_list');

const visual_top = document.querySelector('.visual').offsetHeight + tab_wrap.offsetHeight + 'px';


for(let i = 0; i< tab_list.length; i++){

    const contentScrollTop = window.pageYOffset + content_list[i].getBoundingClientRect().top - tab_wrap.offsetHeight;



    tab_list[i].addEventListener('click',function(){
        window.scrollTo({top:contentScrollTop, behavior: 'smooth'});  
    });
}

// 상단탭 포커스
        window.addEventListener('scroll', function(){
        if( window.scrollY >= window.pageYOffset + content_list[0].getBoundingClientRect().top - tab.offsetHeight - 1){
            tab_list[1].classList.remove('on');
            tab_list[2].classList.remove('on');
            tab_list[0].classList.add('on');
            bottom_btn[0].classList.add('fixed_on');
            // bottom_btn[1].classList.add('fixed_on');
            fixed_btn_bg.classList.add('fixed_on');
        } else{
            bottom_btn[0].classList.remove('fixed_on');
            // bottom_btn[1].classList.remove('fixed_on');
            fixed_btn_bg.classList.remove('fixed_on');
        }
        if(window.scrollY >= window.pageYOffset + content_list[1].getBoundingClientRect().top - tab.offsetHeight - 1){
            tab_list[0].classList.remove('on');
            tab_list[2].classList.remove('on');
            tab_list[1].classList.add('on');
        }
        if(window.scrollY >= window.pageYOffset + content_list[2].getBoundingClientRect().top - tab.offsetHeight - 1){
            tab_list[0].classList.remove('on');
            tab_list[1].classList.remove('on');
            tab_list[2].classList.add('on');
        }
    });

    // 스와이퍼 탭
    const sub_tab_wrap = document.querySelector('.sub_tab_wrap');
    const sub_tab_list = document.querySelectorAll('.sub_tab_list');
    const swiper_content = document.querySelectorAll('.swiper');
    for(let i =0; i < sub_tab_list.length; i++){

        sub_tab_list[i].addEventListener('click',function(){
            
            for(let j = 0; j < sub_tab_list.length; j++){
                sub_tab_list[j].classList.remove('sub_tab_list_on');
                swiper_content[j].classList.remove('swiper_show');
            }
            sub_tab_list[i].classList.add('sub_tab_list_on');
            swiper_content[i].classList.add('swiper_show'); 
        })
    }
    
    
    
    // 아코디언

    const arrow_down = document.querySelectorAll('.arrow_down');
    const arrow_up = document.querySelectorAll('.arrow_up');
    const accordion = document.querySelectorAll('.accordion li');
    const stroke = document.querySelectorAll('.stroke');

    for(let i = 0; i < accordion.length; i++){
        
        accordion[i].addEventListener('click',function(){

            accordion[i].classList.toggle('accordion_on');
            stroke[i].classList.add('stroke_on');

            if(accordion[i].classList.contains('accordion_on')){
                arrow_up[i].style.display = 'block';
                arrow_down[i].style.display = 'none';
            }else{
                arrow_up[i].style.display = 'none';
                arrow_down[i].style.display = 'block';

                setTimeout(function(){
                    stroke[i].classList.remove('stroke_on');
                },400)
                
                
            }

        });

    }


    // 0312 팝업 추가
    const popup_wrap = document.querySelector('.popup_wrap');
    const popup_back = document.querySelector('.popup_back');
    const btn_okay = document.querySelector('.btn_okay');
    const popup_btn = document.querySelector('.popup_btn');
    const popup_content = document.querySelector('.popup_content');
    const popup_header = document.querySelector('.popup_header');


    console.log(popup_wrap.offsetHeight)
    console.log(btn_okay.offsetHeight)
    console.log(popup_header.offsetHeight)

    popup_content.style.height = popup_wrap.offsetHeight - btn_okay.offsetHeight * 2 - popup_header.offsetHeight  + 'px';

    

    popup_btn.addEventListener('click', function(){
        popup_wrap.classList.add('popup_wrap_on');
        popup_back.classList.add('popup_back_on');
        document.querySelector('body').classList.add('scroll_lock');

        
    });
    btn_okay.addEventListener('click',function(){
        popup_wrap.classList.remove('popup_wrap_on');
        popup_back.classList.remove('popup_back_on');
        document.querySelector('body').classList.remove('scroll_lock');

    });


