const express = require('express');
const app = express();
const router = express.Router();

const menuController = require("../controllers/menuController");

// MENU APIs ->
router.post("/menu", menuController.addMenu);
router.get("/menus", menuController.getAllMenus);
router.get("/menu/:menuId", menuController.getMenuById);
router.put("/menu/:menuId", menuController.updateMenuById);
router.delete("/menu/:menuId", menuController.deleteMenuById);

module.exports = router;