"use strict";
exports.__esModule = true;
exports.organizationsRoutes = void 0;
var express_1 = require("express");
var CreateOrganizationController_1 = require("../module/organization/useCases/createOrganization/CreateOrganizationController");
var FavoriteOrganizationController_1 = require("../module/organization/useCases/favoriteOrganization/FavoriteOrganizationController");
var organizationsRoutes = (0, express_1.Router)();
exports.organizationsRoutes = organizationsRoutes;
var createOrganizationController = new CreateOrganizationController_1.CreateOrganizationController();
var favoriteOrganizationController = new FavoriteOrganizationController_1.FavoriteOrganizationController();
organizationsRoutes.post("/", createOrganizationController.handle);
organizationsRoutes.post("/favorite/:id", favoriteOrganizationController.handle);
//# sourceMappingURL=organizations.routes.js.map