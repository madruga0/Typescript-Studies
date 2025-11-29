// Day 07 -> classes and inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snake.prototype.move = function (meters) {
        console.log("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
}(Animal));
var Pony = /** @class */ (function (_super) {
    __extends(Pony, _super);
    function Pony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pony.prototype.move = function (meters) {
        console.log("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Pony;
}(Animal));
var sammy = new Snake("Sammy the Snake");
sammy.move(32);
var pokey = new Pony("Pokey the Pony");
pokey.move(34);
