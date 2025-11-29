// My solution
var firstProduct;
firstProduct = {
    id: 1,
    title: "t-shirts",
    addToCart: function (msg) {
        console.log(msg + this.title);
    },
};
console.log("Adding \"".concat(firstProduct.title, "\" to cart."));
function addToCart(item) {
    console.log("Adding \"".concat(item.title, "\" to cart"));
}
addToCart({ id: 1, title: "oil" });
