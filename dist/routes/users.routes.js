"use strict";
exports.__esModule = true;
exports.usersRoutes = void 0;
var express_1 = require("express");
var CreateUserController_1 = require("../module/donator/useCases/createDonator/CreateUserController");
var GetUserController_1 = require("../module/donator/useCases/getDonator/GetUserController");
var UpdateUserController_1 = require("../module/donator/useCases/updateDonator/UpdateUserController");
var usersRoutes = (0, express_1.Router)();
exports.usersRoutes = usersRoutes;
var getUserController = new GetUserController_1.GetUserController();
var createUserController = new CreateUserController_1.CreateUserController();
var updateUserController = new UpdateUserController_1.UpdateUserController();
usersRoutes.get("/:id", getUserController.handle);
usersRoutes.post("/", createUserController.handle);
usersRoutes.put("/:id", updateUserController.handle);
//# sourceMappingURL=users.routes.js.map