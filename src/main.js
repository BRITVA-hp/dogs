import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'
import './assets/css/media.css'
import './assets/fonts/stylesheet.css'

const app = createApp(App)

app.mount('#app')


let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');

    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText;
        const select = this.closest('.select');
        const currentText = select.querySelector('.select__current');
        // console.log(currentText);
        currentText.innerText = text;
        select.classList.add('is-active');

    }
};

select();

const menuMob = document.querySelector('.burger');
const cLosed = document.querySelector('.closed');
const menuBlock = document.querySelector('.wrapper-list');

menuMob.onclick = function () {
    menuBlock.classList.toggle('wrapper-list__active');
};

cLosed.onclick = function () {
    menuBlock.classList.remove('wrapper-list__active');
};