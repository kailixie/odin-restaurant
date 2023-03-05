export default function about() {
  const content = document.querySelector("#content");

  const history = document.createElement("div");
  history.id = "history";
  history.textContent = `${"Wow, this is a restaurant.\nWe bake a lot of buns.\nWe eat a lot of buns.\nWe sell a lot of buns."}`;

  content.appendChild(history);
}
