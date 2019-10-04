import './styles.css';

const listNumbers = [1, 2, 3, 4, 5];

for (var i = 0; i < listNumbers.length; i++) {
  console.log(listNumbers[i]);
}

const person = 'ed';

console.log(`my name is ${person}`);

function getBook(title, author) {
  return {
    title,
    author
  };
}

const book = getBook('Harry Potter', 'jk');
console.log(book);

const list = {
  name: 'shopping list',
  items: ['milk', 'cow']
};

const { name, items } = list;
console.log(name, items);

const sayLocation = location => {
  console.log(`The location is ${location}`);
};

const sayLocation2 = location => console.log(`The location is ${location}`);

sayLocation('paris');
sayLocation2('london');

const user = {
  name: 'mitchell',
  age: 25,
  sayName: function() {
    console.log(`My name is ${this.name}`);
    const fullName = () => {
      console.log(`My name is ${this.name} and my age is ${this.age}`);
    };
    fullName();
  }
};

user.sayName();
