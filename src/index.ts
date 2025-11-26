// class Users {
//   // properties
//   name: string; // property
//   private balance: number; // property

//   constructor(n: string, b: number) {
//     this.name = n;
//     this.balance = b;
//   }

//   // methods
//   addMoney(amount: number) {
//     this.balance += amount;
//   }
// }

// const user1 = new Users("Pedro", 514);
// user1.balance = 500;
// user1.addMoney(100);
// const user2 = new Users("Brenda", 478);

// console.log(user1);
// console.log(user2);

interface Item {
  name: string;
  value: number;
  itemPurchased(msg: string): void;
}

let product1: Item;

product1 = {
  name: "Apple",
  value: 2,
  itemPurchased(msg) {
    console.log(msg + ' ' + this.name);
  },
};


product1.itemPurchased('You just bought an')