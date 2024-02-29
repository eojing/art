const tab = document.querySelector('.tab');
const tab_list = document.querySelectorAll('.tab_list');
const tab_wrap = document.querySelector('.tab_wrap');
const content = document.querySelector('.content_wrap');
const content_list = document.querySelectorAll('.content_list');
const sub_tab_wrap = document.querySelector('.sub_tab_wrap');
const sub_tab_list = document.querySelectorAll('.sub_tab_list');
const swiper_content = document.querySelectorAll('.swiper');
const accordion = document.querySelectorAll('.accordion li');
const stroke = document.querySelectorAll('.stroke');
const bottom_btn = document.querySelector('.fixed_btn');

const arrow_down = document.querySelectorAll('.arrow_down');
const arrow_up = document.querySelectorAll('.arrow_up');



for(let i = 0; i< tab_list.length; i++){

    const contentScrollTop = content_list[i].offsetTop - tab_wrap.offsetHeight;

    tab_list[i].addEventListener('click',function(){
        window.scrollTo({top:contentScrollTop, behavior: 'smooth'});  
    });
}

window.addEventListener('scroll', function(){
        if( window.scrollY >= content_list[0].offsetTop - tab.offsetHeight){
            tab_list[1].classList.remove('on');
            tab_list[2].classList.remove('on');
            tab_list[0].classList.add('on');
            bottom_btn.classList.add('fixed_on');
        } else{
            bottom_btn.classList.remove('fixed_on');
        }
        if(window.scrollY >= content_list[1].offsetTop - tab.offsetHeight){
            tab_list[0].classList.remove('on');
            tab_list[2].classList.remove('on');
            tab_list[1].classList.add('on');
        }
        if(window.scrollY >= content_list[2].offsetTop - tab.offsetHeight){
            tab_list[0].classList.remove('on');
            tab_list[1].classList.remove('on');
            tab_list[2].classList.add('on');
        }
    });

                // 스와이퍼 탭
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