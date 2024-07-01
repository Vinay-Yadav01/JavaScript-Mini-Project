document.querySelector("body").addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    const cursor = document.querySelector(".cursor");
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});
