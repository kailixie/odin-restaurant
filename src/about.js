export default function about() {
  const content = document.querySelector("#content");

  const textContainer = document.createElement("div");
  textContainer.id = "textContainer";

  content.appendChild(textContainer);

  const text1 = document.createElement("div");
  text1.classList.add("history");
  text1.id = "text1";
  text1.textContent = "We bake a lot of buns.";

  const text2 = document.createElement("div");
  text2.classList.add("history");
  text2.id = "text2";
  text2.textContent = "We sell a lot of buns.";

  const text3 = document.createElement("div");
  text3.classList.add("history");
  text3.id = "text3";
  text3.textContent = "We eat a lot of buns.";

  const text4 = document.createElement("div");
  text4.classList.add("history");
  text4.id = "text4";
  text4.textContent = "This is your place for buns.";

  const text5 = document.createElement("div");
  text5.classList.add("history");
  text5.id = "text5";
  text5.textContent = "This is the place for buns.";

  const text6 = document.createElement("div");
  text6.classList.add("history");
  text6.id = "text6";
  text6.textContent = "We also sell other food that is very delicious.";

  textContainer.appendChild(text1);
  textContainer.appendChild(text2);
  textContainer.appendChild(text3);
  textContainer.appendChild(text4);
  textContainer.appendChild(text5);
  textContainer.appendChild(text6);
}
