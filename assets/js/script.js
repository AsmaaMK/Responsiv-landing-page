// hamburger toggling list

const list = document.querySelector('.invisible');
const toggle_btn = document.querySelector('.burger-icon');
const sections = document.getElementsByClassName('high-opacity');

toggle_btn.addEventListener('click', () => {
    list.classList.toggle('visible');
})


// dynamic tabs

for (let i = 1; i <= 4; i++) {
    const btn = document.getElementById('tab' + i);
    
    btn.addEventListener('click', () => {
        // deactivate all tabs 
        for (let j = 1; j <= 4; j++) {
            const tab = document.getElementById('tab-' + j);
            tab.style.zIndex = -1;

            const btn1 = document.getElementById('tab' + j);
            btn1.className = btn1.className.replace('active-tab', '');
        }

        // activate the clicked tab
        const activTab = document.getElementById('tab-' + i);
        activTab.style.zIndex = 1;

        let classN = btn.className;
        classN += " active-tab";
        btn.className = classN;
    }, false);
}
