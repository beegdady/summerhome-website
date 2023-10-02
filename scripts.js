// THE JAVASCRIPT CODE FOR THE MENU 

function toggleMenu(){
    let nav_items = document.getElementById('nav_items');
    let hero_section = document.querySelector('header_container');
    var menu_btn = document.getElementById('menu_btn');
    var close_btn = document.getElementById('close_btn');
    



    if (nav_items.classList.contains('show')){
        nav_items.classList.remove('show');
        menu_btn.style.display = 'block';
        window.location.reload();

    }else{
        nav_items.classList.add('show');
        menu_btn.style.display = 'none';
        close_btn.style.display = 'block';

    }
}



var menu_btn = document.getElementById('menu_btn');
menu_btn.addEventListener('click', toggleMenu);

var close_btn = document.getElementById('close_btn')
close_btn.addEventListener('click', toggleMenu)















var faqicon = document.getElementsByClassName('faq_icon');
var faqanswer = document.getElementsByClassName('faq_answer');

for (let i = 0; i < faqicon.length; i++) {
    faqicon[i].addEventListener('click', function() {
        if (faqanswer[i].classList.contains('faq_show')) {
            faqanswer[i].classList.remove('faq_show');
            faqanswer[i].classList.add('faq_hide');
        } else {
            faqanswer[i].classList.remove('faq_hide');
            faqanswer[i].classList.add('faq_show');
        }
        
    });
}


