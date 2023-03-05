import _ from "lodash";
import "./style.css";

import menu from "./menu";
import about from "./about";
import home from "./home";
import firstLoad from "./firstLoad";
import render from "./render";

firstLoad();

const aboutBtn = document.querySelector("#aboutTab");
const menuBtn = document.querySelector("#menuTab");
const homeBtn = document.querySelector("#homeTab");

aboutBtn.addEventListener("click", () => {
  render();
  about();
});

menuBtn.addEventListener("click", () => {
  render();
  menu();
});

homeBtn.addEventListener("click", () => {
  render();
  home();
});
