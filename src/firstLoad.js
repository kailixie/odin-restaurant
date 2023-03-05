import navBar from "./nav";
import home from "./home";

const firstLoad = function () {
  const container = document.querySelector("#container");
  const header = navBar();

  container.appendChild(header);

  const footer = document.createElement("div");
  footer.id = "footer";
  footer.textContent = "Made by KX";

  container.appendChild(footer);

  home();
};

export default firstLoad;
