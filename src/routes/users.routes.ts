import { Router } from "express";
import { CreateUserController } from "../module/donator/useCases/createDonator/CreateUserController";
import { GetUserController } from "../module/donator/useCases/getDonator/GetUserController";
import { UpdateUserController } from "../module/donator/useCases/updateDonator/UpdateUserController";

const usersRoutes = Router();

const getUserController = new GetUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();

usersRoutes.get("/:id", getUserController.handle);
usersRoutes.post("/", createUserController.handle);
usersRoutes.put("/:id", updateUserController.handle);

export { usersRoutes };
