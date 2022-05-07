"use strict";
exports.__esModule = true;
exports.causesRoutes = void 0;
var express_1 = require("express");
var CreateOrganizationController_1 = require("../module/causes/useCases/createCause/CreateOrganizationController");
var ListCauseByIdController_1 = require("../module/causes/useCases/listCauseById/ListCauseByIdController");
var ListCausesController_1 = require("../module/causes/useCases/listCauses/ListCausesController");
var UpdateCauseController_1 = require("../module/causes/useCases/updateCause/UpdateCauseController");
var causesRoutes = (0, express_1.Router)();
exports.causesRoutes = causesRoutes;
var listCauses = new ListCausesController_1.ListCausesController();
var listCauseById = new ListCauseByIdController_1.ListCauseByIdController();
var createCauseController = new CreateOrganizationController_1.CreateCauseController();
var updateCauseController = new UpdateCauseController_1.UpdateCauseController();
causesRoutes.get('/', listCauses.handle);
causesRoutes.get('/:id', listCauseById.handle);
causesRoutes.post('/create', createCauseController.handle);
causesRoutes.put('/:id', updateCauseController.handle);
//# sourceMappingURL=causes.routes.js.map