const swiper_slider = new Swiper('.swiper-container', {
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
let hd_block = document.querySelector('.hd_block');

let list_sty = document.querySelectorAll('.list_sty');
let ser_li_it = document.querySelectorAll('.ser_li_it');
let header_dropdown_wrap = document.querySelector('.header_dropdown_wrap');
let list_o_items = document.querySelector('.list_o_items');

let ad_box = document.querySelector('.ad_box');
let header_wrap = document.querySelector('.header_wrap');
let logo_img = document.querySelector('.logo_img');
let n_i_span = document.querySelectorAll('.n_i_span');
let n_i_a = document.querySelectorAll('.n_i_a');
let icon_external = document.querySelector('.icon_external');
let new_menu = document.getElementById('new_menu');
let l_b = document.getElementById('login_button');
let text_bar = document.querySelector('.text_bar');
let n_i_ao = document.querySelector('.n_i_ao');
let navi_item_btn = document.querySelector('.navi_item_btn');

let bl = 'block';
let no = 'none';

let bfPosition = document.documentElement.scrollTop;


function li_hover(o1,o2,o3,o4) {
    header_dropdown_wrap.style.display = o1;
    ser_li_it[0].style.display = o2;
    ser_li_it[1].style.display = o3;
    ser_li_it[2].style.display = o4;
}

function none_display(num) {
    navi_items[num].onmouseover = () => {
        hd_block.style.display = 'none';
        list_o_items.style.display = 'none';
    }
}
function colorRepeat(varName ,val) {
    for (let i = 0; i < varName.length; i++){
        varName[i].style.color = val;
    }
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
    navi_items[1].onmouseover = () => {
        hd_ser_dd.style.display = 'none';
    }
    hd_ser_dd.onmouseout = () => {
        hd_ser_dd.style.display = "none";
        header_dropdown_wrap.onmouseover = () => {
            header_dropdown_wrap.style.display = "block";
        }
        header_dropdown_wrap.style.display = "none";
    }
}

navi_items[4].onmouseover = () => {
    hd_block.style.display = 'block';
    list_o_items.style.display = 'block';
    list_o_items.onmouseout = () => {
        hd_block.style.display = 'none';
        list_o_items.style.display = 'none';
    }
    hd_block.onmouseout = () => {
        hd_block.style.display = 'none';
        list_o_items.style.display = 'none';
    }
    none_display(3);
    none_display(5);
    ad_box.onmouseover = () => {
        hd_block.style.display = 'none';
        list_o_items.style.display = 'none';
    }
}

document.addEventListener('scroll', function () {
    let afPosition = document.documentElement.scrollTop;
    if (afPosition > 0) {
        ad_box.style.display = 'none';
        header_wrap.style.backgroundColor = '#FFFFFF';
        logo_img.style.filter = 'none';
        colorRepeat(n_i_span, "#4E5968");
        colorRepeat(n_i_a, "#4E5968");
        icon_external.style.color = '#4E5968';
        new_menu.style.color = '#3182F6';
        l_b.style.color = '#4E5968';
        l_b.style.backgroundColor = '#FFFFFF';
        text_bar.style.background = '#4E5968';
        n_i_ao.style.color = '#00855B';
        navi_item_btn.style.color = '#FFFFFF';
        navi_item_btn.style.background = '#00855B';
    } else {
        ad_box.style.display = 'block';
        header_wrap.style.backgroundColor = '#00855B';
        logo_img.style.filter = 'brightness(0) invert(1)';
        colorRepeat(n_i_span, "#FFFFFF");
        colorRepeat(n_i_a, "#FFFFFF");
        icon_external.style.color = '#FFFFFF';
        new_menu.style.color = '#8FE0C0';
        l_b.style.color = '#FFFFFF';
        l_b.style.backgroundColor = '#00855B';
        text_bar.style.background = '#FFFFFF';
        n_i_ao.style.color = "#FFFFFF";
        navi_item_btn.style.color = '#00855B';
        navi_item_btn.style.background = '#FFFFFF';
    }
    bfPosition = afPosition;
});