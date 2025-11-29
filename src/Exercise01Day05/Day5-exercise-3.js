var MC = /** @class */ (function () {
    function MC() {
    }
    MC.prototype.greet = function (event) {
        if (event === void 0) { event = "party"; }
        return "Welcome to the ".concat(event);
    };
    return MC;
}());
var mc = new MC();
console.log(mc.greet("show"));
//event -> string
//greet -> string
