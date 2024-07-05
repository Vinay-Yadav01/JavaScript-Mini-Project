const image = document.querySelector('.container');
image.addEventListener('click', () => {
    const mask = document.querySelector('.mask');
    mask.style.display = "block";
    setTimeout(() => {
        mask.style.display = "none";
    },1300);
});