"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = require("./routes");
var PORT = process.env.PORT || 4000;
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.use(routes_1.routes);
app.use(function (err, request, response, next) {
    if (err instanceof Error) {
        return response.status(400).json({ message: err.message });
    }
    return response
        .status(500)
        .json({ status: 'error', message: 'Internal Server Error' });
});
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
//# sourceMappingURL=server.js.map