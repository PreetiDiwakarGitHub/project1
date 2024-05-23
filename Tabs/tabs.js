
document.addEventListener('DOMContentLoaded', function () {
    const about = document.querySelector(".about");
    const btns = document.querySelectorAll(".about-btn");
    const articles = document.querySelectorAll(".content");

    about.addEventListener('click', function (e) {
        const id = e.target.dataset.id;
        if (id) {
            btns.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");

            articles.forEach(article => article.classList.remove("active"));
            document.getElementById(id).classList.add("active");
        }
    });
});
