'use strict'

function toggleMenu() {
    document.body.classList.toggle('menu-open')
    var btnMenu = document.querySelector('.btn-menu');
    btnMenu.classList.toggle('hide-bt');
}

function onPromoToggle(){
 document.body.classList.toggle('promo-open')
}