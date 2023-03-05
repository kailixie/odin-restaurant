// import applePie from "./img/applePie.png";
// import images from "./menuItems";
import createMenuCards from "./menuItems";

export default function menu() {
  const content = document.querySelector("#content");

  const menuItems = createMenuCards();

  content.appendChild(menuItems);

  //   const item1 = document.createElement("div");
  //   item1.classList.add("menuItem");
  //   item1.textContent = "Fresh Buns";

  //   const img1 = new Image();
  //   img1.src = applePie;

  //   item1.appendChild(img1);

  //   content.appendChild(item1);

  //   console.log(images);
}
