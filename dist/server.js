"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var user_1 = __importDefault(require("./handlers/user"));
var product_1 = __importDefault(require("./handlers/product"));
var order_1 = __importDefault(require("./handlers/order"));
var order_product_1 = __importDefault(require("./handlers/order_product"));
var app = (0, express_1.default)();
var address = "0.0.0.0:3000";
var port = 3000;
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.json());
app.get('/', (0, cors_1.default)(corsOptions), function (req, res) {
    res.send('Hello World!');
});
(0, user_1.default)(app);
(0, product_1.default)(app);
(0, order_1.default)(app);
(0, order_product_1.default)(app);
app.listen(port, function () {
    console.log("starting app on: ".concat(address));
});
