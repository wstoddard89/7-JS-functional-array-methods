// #1) ALL PRICE AVERAGES

const prices = items.map(function (item) {
  return item.price;
});
const averagePrice = prices.reduce((a, b) => a + b) / prices.length;
document.querySelector(
  "#answer1"
).innerHTML = `The avergae price is $${averagePrice}`;

console.log(averagePrice)


// #2) COST BETWEEN 14.00 AND 18.00

const betweenPrice = items.filter(function (item) {
  if (item.price > 14 && item.price < 18) {
    return true;
  }
  return false;
});

const betweenPriceTitle = betweenPrice
  .map(function (item) {
    return `<li>${item.title}</li>`;
  })
  .join("");

console.log(betweenPriceTitle)

document.querySelector("#answer2").innerHTML = `${betweenPriceTitle}`;



// #3) WHICH ITEM HAS GBP?

const gbp = items.filter(function (item) {
  if (item.currency_code === "GBP") {
    return true;
  }
  return false;
});
const gbpTitle = gbp.map(function (item) {
  return `${item.title} $${item.price}`;
});

console.log(gbpTitle)

document.querySelector("#answer3").innerHTML = `${gbpTitle}`;


// #4) WHICH ITEMS ARE MADE OF WOOD?

const wood = items.filter(function (item) {
  if (item.materials.includes("wood")) {
    return true;
  }
  return false;
});
const woodTitle = wood
  .map(function (item) {
    return `<li>${item.title} is made of wood.</li>`;
  })
  .join("");

console.log(woodTitle)

document.querySelector("#answer4").innerHTML = `${woodTitle}`;


// #5) WHICH ITEMS ARE MADE OF 8 OR MORE MATERIALS?

const eightMaterials = items.filter(function (item) {
  if (item.materials.length >= 8) {
    return true;
  }
  return false;
});
const eightMaterialsTitle = eightMaterials
  .map(function (item) {
    const materialList = item.materials
      .map(function (item) {
        return `<li>${item}</li>`;
      })
      .join("");
    return `${item.title} has ${item.materials.length} materials: ${materialList}`;
  })
  .join("");

console.log(eightMaterialsTitle)

document.querySelector("#answer5").innerHTML = `${eightMaterialsTitle}`;



// #6) HOW MANY WERE MADE BY THE SELLERS?

const sellerMade = items.filter(function (item) {
  if (item.who_made === "i_did") {
    return true;
  }
  return false;
});

console.log(sellerMade.length)

document.querySelector("#answer6").innerHTML = `${sellerMade.length} were made by their sellers`;
