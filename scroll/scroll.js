
document.addEventListener('DOMContentLoaded', function () {
  let button = document.querySelector('.btn');
  let links = document.querySelector('.links');
  let navbar = document.querySelector('nav');
  let imgSection = document.getElementById('imges');

  button.addEventListener('click', function () {
    links.classList.toggle('active');
  });

  const toggleBtn = document.querySelector(".btn");
  const sidebar = document.querySelector(".main");
  const scrollLinks = document.querySelectorAll(".scroll-link");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });

  scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);
      const position = element.offsetTop;

      window.scrollTo({
        left: 0,
        top: position,
        behavior: "smooth"
      });

      sidebar.classList.remove("active");
    });
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function toggleNavbarBackground() {
    if (isElementInViewport(imgSection)) {
      navbar.classList.add('transparent-nav');
    } else {
      navbar.classList.remove('transparent-nav');
    }
  }

  window.addEventListener('scroll', toggleNavbarBackground);
  toggleNavbarBackground();
});
