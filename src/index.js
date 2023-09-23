import "./style.css";
import Rooster from "./rooster.jpg";
import Chicken from "./chicken.png";
import Dobos from "./dobos.jpg";
import Todo from "./todo.png";
import Tictactoe from "./tictactoe.png";
import Signup from "./sign-up.png";
import Library from "./library.png";
import Calculator from "./calculator.png";
import Etchasketch from "./etchasketch.png";
import Phone from "./phone.jpg";
import Foot from "./foot.jpg";

const pages = document.querySelectorAll(".page");

const hidePages = () => {
  pages.forEach((page) => {
    page.style.display = "none";
  });
};

hidePages();

const homePage = document.querySelector(".home-page");
homePage.style.display = "grid";

const aboutPage = document.querySelector(".about-page");
const portfolioPage = document.querySelector(".portfolio-page");
const contactPage = document.querySelector(".contact-page");

const menuButtons = document.querySelectorAll("header button");

const deselectButtons = () => {
  menuButtons.forEach((button) => {
    button.removeAttribute("style", "color");
  });
};

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    hidePages();
    deselectButtons();
    button.style.color = "#78ff9a";
    switch (button.className) {
      case "home":
        homePage.style.display = "grid";
        break;
      case "about":
        aboutPage.style.display = "grid";
        break;
      case "portfolio":
        portfolioPage.style.display = "grid";
        break;
      case "contact":
        contactPage.style.display = "grid";
        break;
    }
  });
});
