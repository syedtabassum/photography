//SCROLL APPEAR
function Appear() {
    var Text = document.querySelector(".text");
    var textPosition = Text.getBoundingClientRect().top;
  
    var screenPosition = window.innerHeight / 1.5;
  
    if (textPosition < screenPosition) Text.classList.add("text-active");
  }
  window.addEventListener("scroll", Appear);
  //nav
  var Nav = document.querySelector(".navi");
  window.addEventListener("scroll", () => {
    Nav.classList.toggle("nav-scroll", window.scrollY);
  });
  
  //burger display//
  function burger() {
    const burg = document.querySelector(".burg");
    const Nav = document.querySelector(".nav-links");
    burg.addEventListener("click", () => {
      burg.classList.toggle("toggle");
      Nav.classList.toggle("nav-act");
    });
  }
  burger();
  