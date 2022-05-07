"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var aiders_routes_1 = require("./aiders.routes");
var causes_routes_1 = require("./causes.routes");
var organizations_routes_1 = require("./organizations.routes");
var routes = (0, express_1.Router)();
exports.routes = routes;
// const authenticateUserController = new AuthenticateUserController();
// routes.post("/auth", authenticateUserController.handle);
routes.use('/aiders', aiders_routes_1.aidersRoutes);
routes.use('/organizations', organizations_routes_1.organizationsRoutes);
routes.use('/causes', causes_routes_1.causesRoutes);
//# sourceMappingURL=index.js.map