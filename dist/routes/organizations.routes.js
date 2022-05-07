"use strict";
exports.__esModule = true;
exports.organizationsRoutes = void 0;
var express_1 = require("express");
var CreateOrganizationController_1 = require("../module/organizations/useCases/createOrganization/CreateOrganizationController");
var ListOrganizationByIdController_1 = require("../module/organizations/useCases/listOrganizationById/ListOrganizationByIdController");
var ListAidersController_1 = require("../module/organizations/useCases/listOrganizations/ListAidersController");
var UpdateOrganizationController_1 = require("../module/organizations/useCases/updateOrganization/UpdateOrganizationController");
var organizationsRoutes = (0, express_1.Router)();
exports.organizationsRoutes = organizationsRoutes;
var listOrganizations = new ListAidersController_1.ListOrganizationsController();
var listOrganizationById = new ListOrganizationByIdController_1.ListOrganizationByIdController();
var createOrganizationController = new CreateOrganizationController_1.CreateOrganizationController();
var updateOrganizationController = new UpdateOrganizationController_1.UpdateOrganizationController();
organizationsRoutes.get('/', listOrganizations.handle);
organizationsRoutes.get('/:id', listOrganizationById.handle);
organizationsRoutes.post('/create', createOrganizationController.handle);
organizationsRoutes.put('/:id', updateOrganizationController.handle);
//# sourceMappingURL=organizations.routes.js.map