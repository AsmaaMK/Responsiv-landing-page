const list = document.querySelector('.invisible');
const toggle_btn = document.querySelector('.burger-icon');

toggle_btn.addEventListener('click', () => {
    list.classList.toggle('visible');
})