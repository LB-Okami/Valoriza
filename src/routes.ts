import { CreateComplimentController } from './controller/CreateComplimentController';
import { AuthenticateUserController } from './controller/AuthenticateUserController';
import { CreateUserController } from './controller/CreateUserController';
import { CreateTagController } from './controller/CreateTagController';
import { ensureAdmin } from './middleware/ensureAdmin';
import { Router } from "express";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()

router.post("/users", createUserController.handle)
router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", createComplimentController.handle)

export { router }