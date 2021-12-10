const swiper_slider = new Swiper('.swiper-container' , {
    speed: 500,
    debugger: true,
    loop: true,
    mousewheel: false,
    autoplay: { 
        delay: 3000
    }  
});

let navi_items = document.querySelectorAll('.navi_items');
let hd_ser_dd = document.querySelector('.hd_ser_dd');

let list_sty = document.querySelectorAll('.list_sty');
let ser_li_it = document.querySelectorAll('.ser_li_it');
let header_dropdown_wrap = document.querySelector('.header_dropdown_wrap');

let bl = 'block';
let no = 'none';

function li_hover(o1,o2,o3,o4) {
    header_dropdown_wrap.style.display = o1;
    ser_li_it[0].style.display = o2;
    ser_li_it[1].style.display = o3;
    ser_li_it[2].style.display = o4;
}

navi_items[0].onmouseover = () => {
    hd_ser_dd.style.display = 'flex';
    hd_ser_dd.onmouseover = () => {
        list_sty[0].onmouseover = () => {
            li_hover(bl, bl, no, no);
        }
        list_sty[1].onmouseover = () => {
            li_hover(bl, no, bl, no);
        }
        list_sty[2].onmouseover = () => {
            li_hover(bl, no, no, bl);
        }
    }

    hd_ser_dd.onmouseout = () => {
        hd_ser_dd.style.display = "none";
        header_dropdown_wrap.onmouseover = () => {
            header_dropdown_wrap.style.display = "block";
        }
        header_dropdown_wrap.style.display = "none";
    }
}

