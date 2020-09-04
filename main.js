// #1) ALL PRICE AVERAGES

const itemPrices = items.map(function (item) {
  return item.price;
});
const averagePrice = itemPrices.reduce((a, b) => a + b) / itemPrices.length;
document.querySelector(
  "#answer1"
).innerHTML = `The avergae price is $${averagePrice}`;

console.log(averagePrice)


// #2) COST BETWEEN 14.00 AND 18.00

const costBetween = items.filter(function (item) {
  if (item.price > 14 && item.price < 18) {
    return true;
  }
  return false;
});
console.log(costBetween)
const costBetweenTitle = costBetween
  .map(function (item) {
    return `<li>${item.title}</li>`;
  })
  .join("");

console.log(costBetweenTitle)

document.querySelector("#answer2").innerHTML = `${costBetweenTitle}`;



// #3) WHICH ITEM HAS GBP?

const gbpItem = items.filter(function (item) {
  if (item.currency_code === "GBP") {
    return true;
  }
  return false;
});
const gbpItemTitle = gbpItem.map(function (item) {
  return `${item.title} $${item.price}`;
});

console.log(gbpItemTitle)

document.querySelector("#answer3").innerHTML = `${gbpItemTitle}`;


// #4) WHICH ITEMS ARE MADE OF WOOD?

const woodItems = items.filter(function (item) {
  if (item.materials.includes("wood")) {
    return true;
  }
  return false;
});
const woodItemsTitle = woodItems
  .map(function (item) {
    return `<li>${item.title} is made of wood.</li>`;
  })
  .join("");

console.log(woodItemsTitle)

document.querySelector("#answer4").innerHTML = `${woodItemsTitle}`;


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
