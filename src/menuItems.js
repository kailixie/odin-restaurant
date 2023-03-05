// Import all menu images

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(require.context("./img", false, /\.png/));

// export default images;

const menuList = [
  [
    "apple-pie.png",
    "http://localhost:8080/imgs/applePie.34f89efef7130d32e23c05e19184eb32.png",
  ],
  [
    "bagel.png",
    "http://localhost:8080/imgs/bagel.c82a08a3aaf4ff68171348bcec237794.png",
  ],
  [
    "baguette.png",
    "http://localhost:8080/imgs/baguette.9115766cb27d1ca1c6a6c3b31fad3d49.png",
  ],
  [
    "bread.png",
    "http://localhost:8080/imgs/bread.08e14f2c6498de200e3cb9b8d3dd361c.png",
  ],
  [
    "bread-loaf.png",
    "http://localhost:8080/imgs/breadLoaf.9bd7bead313d68835618cfc72dd1dec2.png",
  ],
  [
    "bun.png",
    "http://localhost:8080/imgs/bun.a5beb66367aa698efdc067845580e7cc.png",
  ],
  [
    "cheesecake.png",
    "http://localhost:8080/imgs/cheesecake.19e3a9d4fc12a5b47f81ad7aae7769ee.png",
  ],
  [
    "chocolate-cake.png",
    "http://localhost:8080/imgs/chocolateCake.62a37dbb643fd8d1316399801f63438d.png",
  ],
  [
    "cookies.png",
    "http://localhost:8080/imgs/cookies.7d1d62b0813796f2be92b98864f8b6f0.png",
  ],
  [
    "donut.png",
    "http://localhost:8080/imgs/donut.5aa2b70478bdb1579a877cfcee0ef3df.png",
  ],
  [
    "eggtart.png",
    "http://localhost:8080/imgs/eggtart.d3bfe0c7ba963bb491fd97c7bac08bbb.png",
  ],
  [
    "fruit-cake.png",
    "http://localhost:8080/imgs/fruitcake.5290eaa654b071f3e6446710ea5193f3.png",
  ],
  [
    "garlic-bread.png",
    "http://localhost:8080/imgs/garlicbread.28f2bdabde672aca910fdde345157f9c.png",
  ],
  [
    "gingerbread-man.png",
    "http://localhost:8080/imgs/gingerbreadMan.da11bb1454fc242da7458f2a56ed5a89.png",
  ],
  [
    "gummy-bear.png",
    "http://localhost:8080/imgs/gummyBear.e286357e3777b6414a5a2e8bb7023f08.png",
  ],
  [
    "lemon-pie.png",
    "http://localhost:8080/imgs/lemonPie.1c0e0591a43500c1b53832e59e69491a.png",
  ],
  [
    "mac-n-cheese.png",
    "http://localhost:8080/imgs/macncheese.a9a560f9e4dc3889da4218c857810bff.png",
  ],
  [
    "pancakes.png",
    "http://localhost:8080/imgs/pancakes.27d1aaa90f5f675e67b33a0861baeab1.png",
  ],
  [
    "strawberry-cake.png",
    "http://localhost:8080/imgs/strawberryCake.cc79a51bdb788a0ea1e0a5bab7feb59d.png",
  ],
  [
    "waffle.png",
    "http://localhost:8080/imgs/waffle.6a09e06e97e6512ba98a755c187f5745.png",
  ],
];

// create menu class

// class Item {
//   constructor(name, src) {
//     this.name = name;
//     this.src = src;
//     this.cost = 5;
//   }

//   set name(value)
// }

const createMenuCards = function () {
  const menuCards = document.createElement("div");
  menuCards.id = "menuCards";

  for (let i = 0; i < menuList.length; i++) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("card");
    menuCard.id = `item-${i}`;

    const cardName = document.createElement("h3");
    let name = `${menuList[i][0]
      .slice(0, menuList[i][0].length - 4)
      .replace("-", " ")}`;
    cardName.textContent = `${name.toUpperCase()}`;

    const menuImage = new Image();
    menuImage.src = images[`${menuList[i][0]}`];

    const cardCost = document.createElement("h3");
    cardCost.textContent = "$5";

    menuCard.appendChild(cardName);
    menuCard.appendChild(menuImage);
    menuCard.appendChild(cardCost);

    menuCards.appendChild(menuCard);
  }

  return menuCards;
};

export default createMenuCards;
