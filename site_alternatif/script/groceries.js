// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products

var products = [{
    name: "Boîte de céréals",
    lactoseIntolerant: true,
    nutAllergy: false,
    secondOption: true,
    firstOption: false,
    price: 5.47
  },
  {
    name: "Barres de chocolats",
    lactoseIntolerant: true,
    nutAllergy: false,
    secondOption: true,
    firstOption: false,
    price: 2.01
  },
  {
    name: "Beurre d'arachides",
    lactoseIntolerant: true,
    nutAllergy: false,
    secondOption: true,
    firstOption: false,
    price: 7.94
  },
  {
    name: "Miel",
    lactoseIntolerant: true,
    nutAllergy: false,
    secondOption: true,
    firstOption: false,
    price: 3.97
  },
  {
    name: "Barres granola",
    lactoseIntolerant: true,
    secondOption: true,
    firstOption: false,
    nutAllergy: false,
    price: 3.98
  },
  {
    name: "Chili",
    lactoseIntolerant: true,
    secondOption: true,
    firstOption: false,
    nutAllergy: false,
    price: 5.01
  },
  {
    name: "Mortadelle",
    lactoseIntolerant: true,
    nutAllergy: false,
    secondOption: true,
    firstOption: false,
    price: 5.99
  },
  {
    name: "Croustilles aux patates",
    lactoseIntolerant: true,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    price: 2.49
  },
  {
    name: "Pommes de terre",
    lactoseIntolerant: true,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    price: 5.99
  },
  {
    name: "Poulet",
    lactoseIntolerant: true,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    price: 12.38
  },
  {
    name: "Poisson",
    lactoseIntolerant: true,
    secondOption: true,
    firstOption: false,
    nutAllergy: true,
    price: 3.99
  },
  {
    name: "Pain",
    lactoseIntolerant: false,
    secondOption: true,
    firstOption: false,
    nutAllergy: true,
    price: 3.49
  },
  {
    name: "Jus d'orange",
    lactoseIntolerant: true,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    lactoseAndNuts: true,
    price: 7.99
  },
  {
    name: "Champignons",
    lactoseIntolerant: true,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    lactoseAndNuts: true,
    price: 2.79
  },
  {
    name: "Ananas",
    lactoseIntolerant: true,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    lactoseAndNuts: true,
    price: 4.99
  },
  {
    name: "Fromage",
    lactoseIntolerant: false,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    price: 13.99
  },
  {
    name: "Beurre",
    lactoseIntolerant: false,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    price: 4.99
  },
  {
    name: "Yaourt",
    lactoseIntolerant: false,
    nutAllergy: true,
    price: 5.49
  },
  {
    name: "Mayonnaise",
    lactoseIntolerant: false,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    price: 3.99
  },
  {
    name: "Gâteau",
    lactoseIntolerant: false,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    price: 26.99
  },
  {
    name: "Broccolis",
    lactoseIntolerant: true,
    nutAllergy: true,
    lactoseAndNuts: true,
    secondOption: true,
    firstOption: false,
    glutenFree: true,
    price: 2.99
  },
  {
    name: "Amandes",
    lactoseIntolerant: true,
    nutAllergy: false,
    secondOption: true,
    firstOption: false,
    price: 11.99
  },
  {
    name: "Tofu",
    lactoseIntolerant: true,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    lactoseAndNuts: true,
    price: 1.99
  },
  {
    name: "Gombo",
    lactoseIntolerant: true,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    lactoseAndNuts: true,
    price: 3.99
  },
  {
    name: "Chou frisé",
    lactoseIntolerant: true,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    lactoseAndNuts: true,
    price: 3.49
  },
  {
    name: "Navets",
    lactoseIntolerant: true,
    nutAllergy: true,
    secondOption: true,
    firstOption: false,
    lactoseAndNuts:true,
    price: 1.32
  },
  {
    name: "Épinards",
    lactoseIntolerant: true,
    nutAllergy: true,
    lactoseAndNuts: true,
    secondOption: true,
    firstOption: false,
    price: 3.49
  },
  {
    name: "Fraises organiques",
    firstOption: true,
    secondOption: false,
    price: 3.10
  },
  {
    name: "Nectarine organique",
    firstOption: true,
    secondOption: false,
    price: 3.99
  },
  {
    name: "Pommes",
    firstOption: false,
    secondOption: true,
    price: 2.75
  },
  {
    name: "Raisins organiques",
    firstOption: true,
    secondOption: false,
    price: 1.20
  },
  {
    name: "Pommes organiques",
    firstOption: true,
    secondOption: false,
    lactoseIntolerant: false,
    nutAllergy: false,
    price: 4.75
  },
  {
    name: "Riz",
    firstOption: false,
    secondOption: false,
    lactoseIntolerant: false,
    nutAllergy: false,
    glutenFree: true,
    price: 13.75
  },
  {
    name: "Quinoa",
    firstOption: false,
    secondOption: false,
    lactoseIntolerant: false,
    nutAllergy: false,
    glutenFree: true,
    price: 5.75
  },
  {
    name: "Maïs",
    firstOption: false,
    secondOption: false,
    lactoseIntolerant: false,
    nutAllergy: false,
    glutenFree: true,
    price: 6.30
  },
  {
    name: "Jambon",
    firstOption: false,
    secondOption: true,
    lactoseIntolerant: true,
    nutAllergy: true,
    glutenFree: true,
    price: 9.75
  }
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
  let product_names = [];
  let product_price = [];
  let sorted  = [];
  sorted = products.sort((a,b)=>(a.price-b.price));
  for (let i = 0; i < sorted.length; i += 1) {
    if ((restriction == "lactoseIntolerant") && (sorted[i].lactoseIntolerant == true)) {
      product_names.push(sorted[i].name + " : " + sorted[i].price);
    }
    else if (((restriction == "nutAllergy") && (sorted[i].nutAllergy == true))) {
      product_names.push(sorted[i].name + " : " + sorted[i].price);
    }

    else if(restriction == "None" || ((restriction == "firstOption") && (sorted[i].firstOption == true))){
      product_names.push(sorted[i].name + " : " + sorted[i].price);
    }

    else if((restriction == "secondOption") && (sorted[i].secondOption == true)){
      product_names.push(sorted[i].name + " : " + sorted[i].price);
    }

    else if((restriction == "lactoseAndNuts") && (sorted[i].lactoseAndNuts == true)){
      product_names.push(sorted[i].name + " : " + sorted[i].price);
    }

    else if((restriction == "glutenFree") && (sorted[i].glutenFree == true)){
      product_names.push(sorted[i].name + " : " + sorted[i].price);
    }
  }
  return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
  totalPrice = 0;
  let tmp = [];
  for (let i = 0; i < chosenProducts.length; i += 1) {
    tmp.push(chosenProducts[i].slice(-4));
  }

  for (let j = 0; j < tmp.length; j += 1) {
    tmp[j] = parseFloat(tmp[j]);
  }

  for (let k = 0; k < tmp.length; k += 1) {
    totalPrice += tmp[k];
  }
  return totalPrice.toFixed(2);
}
