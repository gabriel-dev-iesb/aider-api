import { Router } from "express";
import { AuthenticateUserController } from "../module/account/authenticateUser/AuthenticateUserController";
import { organizationsRoutes } from "./organizations.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();
const authenticateUserController = new AuthenticateUserController();

routes.post("/auth", authenticateUserController.handle);
routes.use("/users", usersRoutes);
routes.use("/organizations", organizationsRoutes);

export { routes };
