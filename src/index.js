// class Users {
//   // properties
//   name: string; // property
//   private balance: number; // property
var product1;
product1 = {
    name: "Apple",
    value: 2,
    itemPurchased: function (msg) {
        console.log(msg + ' ' + this.name);
    },
};
product1.itemPurchased('You just bought an');
