export default function render() {
  const content = document.querySelector("#content");
  content.style = "";
  while (content.children.length > 0) {
    content.children[0].remove();
  }
}
