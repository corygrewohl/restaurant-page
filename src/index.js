import _ from "lodash";
import "./style.css";

function component() {
  const content = document.createElement("div");
  content.classList.add("content");

  /**
   * Header creation
   */
  const header = document.createElement("div");
  header.classList.add("header");

  const logo = document.createElement("p");
  logo.classList.add("logo");
  logo.textContent = "Elzar's Fine Cuisine";

  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const homeBtn = document.createElement("button");
  homeBtn.classList.add("nav-btn");
  homeBtn.textContent = "Home";
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("nav-btn");
  menuBtn.textContent = "Menu";
  const reviewsBtn = document.createElement("button");
  reviewsBtn.classList.add("nav-btn");
  reviewsBtn.textContent = "Reviews";

  navbar.appendChild(homeBtn);
  navbar.appendChild(menuBtn);
  navbar.appendChild(reviewsBtn);

  header.appendChild(logo);
  header.appendChild(navbar);

  content.appendChild(header);

  /**
   * Body Creation
   */

  const bodyContainer = document.createElement("div");
  bodyContainer.classList.add("body-container");

  const bodyContent = document.createElement("div");
  bodyContent.classList.add("body-content");

  bodyContainer.appendChild(bodyContent);

  content.appendChild(bodyContainer);

  return content;
}

document.body.appendChild(component());
