"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var AuthenticateUserController_1 = require("../module/account/authenticateUser/AuthenticateUserController");
var organizations_routes_1 = require("./organizations.routes");
var users_routes_1 = require("./users.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
var authenticateUserController = new AuthenticateUserController_1.AuthenticateUserController();
routes.post("/auth", authenticateUserController.handle);
routes.use("/users", users_routes_1.usersRoutes);
routes.use("/organizations", organizations_routes_1.organizationsRoutes);
//# sourceMappingURL=index.js.map