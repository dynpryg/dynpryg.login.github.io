const wrapper = document.querySelector('.wrapper');
const loginLink= document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.iconClose');
let menu = document.querySelector('#menu-icon');
let navigation = document.querySelector('.navigation');
let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navigation.classList.toggle('open');
}

function onlogin() {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);
}