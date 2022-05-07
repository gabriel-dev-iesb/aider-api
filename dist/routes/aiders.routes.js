"use strict";
exports.__esModule = true;
exports.aidersRoutes = void 0;
var express_1 = require("express");
var CreateAiderController_1 = require("../module/aiders/useCases/createAider/CreateAiderController");
var ListAiderByIdController_1 = require("../module/aiders/useCases/listAiderById/ListAiderByIdController");
var ListAidersController_1 = require("../module/aiders/useCases/listAiders/ListAidersController");
var UpdateAiderController_1 = require("../module/aiders/useCases/updateAider/UpdateAiderController");
var aidersRoutes = (0, express_1.Router)();
exports.aidersRoutes = aidersRoutes;
var listAidersController = new ListAidersController_1.ListAidersController();
var listAiderById = new ListAiderByIdController_1.ListAiderByIdController();
var createAiderController = new CreateAiderController_1.CreateAiderController();
var updateAiderController = new UpdateAiderController_1.UpdateAiderController();
aidersRoutes.get('/', listAidersController.handle);
aidersRoutes.get('/:id', listAiderById.handle);
aidersRoutes.post('/create', createAiderController.handle);
aidersRoutes.put('/:id', updateAiderController.handle);
//# sourceMappingURL=aiders.routes.js.map