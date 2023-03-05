const navBar = function () {
  const header = document.createElement("div");
  header.id = "header";

  const restaurantName = document.createElement("div");
  restaurantName.id = "restName";
  restaurantName.textContent = "Buns Buns Buns";

  const tabs = document.createElement("div");
  tabs.id = "tabsDiv";

  const aboutTab = document.createElement("div");
  aboutTab.classList.add("tab");
  aboutTab.id = "aboutTab";
  aboutTab.textContent = "About";

  tabs.appendChild(aboutTab);

  const menuTab = document.createElement("div");
  menuTab.classList.add("tab");
  menuTab.id = "menuTab";
  menuTab.textContent = "Menu";

  tabs.appendChild(menuTab);

  const homeTab = document.createElement("div");
  homeTab.classList.add("tab");
  homeTab.id = "homeTab";
  homeTab.textContent = "Home";

  tabs.appendChild(homeTab);

  header.appendChild(restaurantName);
  header.appendChild(tabs);

  return header;
};

export default navBar;
