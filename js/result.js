

            const sub_tab_wrap = document.querySelector('.sub_tab_wrap');
            const sub_tab_list = document.querySelectorAll('.sub_tab_list');
            const swiper_content = document.querySelectorAll('.swiper');
            const accordion = document.querySelectorAll('.accordion li');
            const stroke = document.querySelectorAll('.stroke');
            const bottom_btn = document.querySelector('.fixed_btn');








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
                    }else{
                        setTimeout(function(){
                            stroke[i].classList.remove('stroke_on');
                        },400)
                        
                        
                    }

                });

            }