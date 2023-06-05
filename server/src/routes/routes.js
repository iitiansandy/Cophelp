const express = require('express');
const app = express();
const router = express.Router();

const menuController = require("../controllers/menuController");

// MENU APIs ->
router.post("/menu", menuController.addMenu);
router.get("/menus", menuController.getAllMenus);
router.put("/menu/:menuId/:idx", menuController.updateMenuById);
router.delete("/menu/:menuId/:idx", menuController.deleteMenuById);

module.exports = router;