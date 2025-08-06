import express, { Router } from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/database", homeController.getDatabase)
    router.get("/CRUD", homeController.getCRUD)

    router.post("/post-crud", homeController.postCRUD)

    router.post("/api/signin", userController.handleSignin)
    router.get("/api/get-all-users", userController.handleGetAllUsers)
    router.post("/api/create-new-user", userController.handleCreateNewUser)

    return app.use("/", router)
}

module.exports = initWebRoutes;