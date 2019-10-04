// Params
const add = (c = 1, d = 1) => {
  console.log(c + d);
};
add();

// Arrays and Lopping
const shoppingList = ['Milk', 'Cow', 'Eggs', 'Bananas', 'Choco'];

shoppingList.forEach(product => console.log(product));

shoppingList.forEach((product, index) => {
  console.log(`The index is ${index} and the product is ${product}`);
});

// Map
const newList = shoppingList.map(item => {
  return item + '_new';
});

console.log(newList);

// filter
const filterList = shoppingList.filter(item => item !== 'Eggs');
console.log(filterList);

// Classes
class CartList {
  constructor(items, nr) {
    this.items = items;
    this.nr = nr;
  }
  sayList() {
    console.log(this.items);
  }
}

const myList = new CartList(['Milk', 'Cow', 'Eggs', 'Bananas', 'Red Bull'], 3);
myList.sayList();

class Product extends CartList {
  constructor(items, nr, amount, cost) {
    super(items, nr);
    this.amount = amount;
    this.cost = cost;
  }
}

const product = new Product(['Bluebull', 'White Choco', 'Candy'], 3, 2, 20);
product.sayList();
