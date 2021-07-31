window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        document.querySelector(".navbar").style.padding = "30px 10px";
        document.querySelector("img").style.width = "100px";
        document.querySelector("img").style.transition = "1s";
        document.querySelector(".nav-under").style.opacity = "95%";
        document.querySelectorAll(".nav-ul").forEach((item) => {
            item.style.visibility = "visible";
            item.style.opacity = "100%";
        });
    } else {
        document.querySelector(".navbar").style.padding = "150px 10px";
        document.querySelector("img").style.width = "650px";
        document.querySelector("img").style.transition = "2s";
        document.querySelector(".nav-under").style.opacity = "0%";
        document.querySelectorAll(".nav-ul").forEach((item) => {
            item.style.visibility = "hidden";
            item.style.opacity = "0%";
        });
    }
}
