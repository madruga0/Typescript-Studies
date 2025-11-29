// My solution

interface Item {
  id: number;
  title: string;
  variantId?: number;
  addToCart(msg: string): void;
}

let firstProduct: Item;

firstProduct = {
  id: 1,
  title: "t-shirts",
  addToCart(msg) {
    console.log(msg + this.title);
  },
};

console.log(`Adding "${firstProduct.title}" to cart.`);


// Teach solution
// he maintains the function
// variantId is optional ==> ?

interface CarItem {
  id: number;
  title: string;
  variantId?: number;
}

function addToCart(item: CarItem) {
  console.log(`Adding "${item.title}" to cart`);
}

addToCart({ id: 1, title: "oil" });
