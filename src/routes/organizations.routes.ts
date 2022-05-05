import { Router } from "express";
import { CreateOrganizationController } from "../module/organization/useCases/createOrganization/CreateOrganizationController";
import { FavoriteOrganizationController } from "../module/organization/useCases/favoriteOrganization/FavoriteOrganizationController";

const organizationsRoutes = Router();

const createOrganizationController = new CreateOrganizationController();
const favoriteOrganizationController = new FavoriteOrganizationController();

organizationsRoutes.post("/", createOrganizationController.handle);
organizationsRoutes.post(
  "/favorite/:id",
  favoriteOrganizationController.handle
);

export { organizationsRoutes };
