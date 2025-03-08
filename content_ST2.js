window.onscroll = function() {
    let moveToTopBtn = document.getElementById("moveToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        moveToTopBtn.style.display = "block";
    } else {
        moveToTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
