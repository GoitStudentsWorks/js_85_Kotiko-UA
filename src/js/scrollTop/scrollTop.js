const scrollBtn = document.querySelector('.isShowBtn')
window.onscroll = () => {
    if (window.scrollY > 900) {
        scrollBtn.classList.remove('isShowBtn_hide');
    } else if (window.scrollY < 900) {
        scrollBtn.classList.add('isShowBtn_hide');
    }
}

scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
}