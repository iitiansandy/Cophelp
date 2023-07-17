const express = require('express');
const app = express();
const router = express.Router();

const menuController = require("../controllers/menuController");
const adminController = require("../controllers/adminController");
const enquiryController = require('../controllers/enquiryController');

// ADMIN APIs
router.post("/admin", adminController.signUpAdmin);
router.post("/login", adminController.loginAdmin);

// MENU APIs ->
router.post("/menu", menuController.addMenu);
router.get("/menus", menuController.getAllMenus);
router.get("/menu/:menuId", menuController.getMenuById);
router.put("/menu/:menuId", menuController.updateMenuById);
router.delete("/menu/:menuId", menuController.deleteMenuById);

// ENQUIRY API
router.post("/contactus", enquiryController.addContactUsDetails);

module.exports = router;