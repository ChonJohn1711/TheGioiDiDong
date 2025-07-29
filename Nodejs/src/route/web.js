import express, { Router } from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage)
    router.get("/database", homeController.getDatabase)

    return app.use("/", router)
}

module.exports = initWebRoutes;