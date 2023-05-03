"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../order");
var order_product_1 = require("../order_product");
var product_1 = require("../product");
var user_1 = require("../user");
var store = new order_product_1.OrderProductStore();
var usersStore = new user_1.UsersStore();
var productsStore = new product_1.ProductsStore();
var orderStore = new order_1.OrderStore();
describe('OrderProduct Model', function () {
    it('should have an index method', function () {
        expect(store.index).toBeDefined();
    });
    it('should have a show method', function () {
        expect(store.find).toBeDefined();
    });
});
