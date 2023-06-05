const { isValidObjectId } = require("mongoose");
const menuModel = require("../models/menuModel");
const { isValid, isValidRequestBody } = require("../utils/utils");

// ADD MENU
const addMenu = async (req, res) => {
  try {
    let data = req.body;

    let { menuName, toolsName } = data;

    if (!isValid(menuName)) {
      return res
        .status(400)
        .send({ status: false, message: "Menu name is required" });
    }

    if (!isValid(toolsName)) {
      return res
        .status(400)
        .send({ status: false, message: "Tool name is required" });
    }

    let menuData = {
      menuName,
      toolsName,
    };

    await menuModel.create(menuData);

    return res.status(201).send({
      status: true,
      message: "Menu added successfully",
      data: menuData,
    });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET ALL MENUS
const getAllMenus = async (req, res) => {
  try {
    let menus = await menuModel.find();

    if (menus.length === 0) {
      return res.status(404).send({ status: false, message: "No menu found" });
    }

    return res.status(200).send({ status: true, data: menus });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// GET MENU BY MENU ID
const getMenuById = async (req, res) => {
  try {
    let menuId = req.params.menuId;

    let menu = await menuModel.findOne({ _id: menuId });

    if (!menu) {
      return res.status(404).send({ status: false, message: "Menu not found" });
    }

    return res.status(200).send({ status: true, data: menu });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// UPDATE MENU BY MENU ID
const updateMenuById = async (req, res) => {
  try {
    let menuId = req.params.menuId;

    if (!isValidObjectId(menuId)) {
      return res.status(400).send({
        status: false,
        message: "Invalid menu id, please provide a valid menu id",
      });
    }

    let menu = await menuModel.findOne({ _id: menuId });

    if (!menu) {
      return res
        .status(404)
        .send({ status: false, message: "No menu found with this menu id" });
    }

    // console.log(menu.toolsName[0].name);
    // console.log(menu.toolsName[0].url);

    if (!menu) {
      return res
        .status(404)
        .send({ status: false, message: "No menu found with this menu id" });
    }

    let body = req.body;

    if (!isValidRequestBody(body)) {
      return res
        .status(400)
        .send({ status: false, message: "Please enter data in request body" });
    }

    if ("menuName" in body) {
      menu.menuName = body.menuName;
    }

    if ("toolsName" in body) {
      menu.toolsName = body.toolsName;
    }

    await menu.save();

    return res
      .status(200)
      .send({ status: true, message: "Menu updated successfully", data: menu });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// DELETE MENU BY MENU ID
const deleteMenuById = async (req, res) => {
  try {
    let menuId = req.params.menuId;
    // let idx = req.params.idx;

    if (!isValidObjectId(menuId)) {
      return res.status(400).send({
        status: false,
        message: "Invalid menu id, please enter a valid menu id",
      });
    }

    let menu = await menuModel.findOne({ _id: menuId });

    if (!menu) {
      return res
        .status(404)
        .send({ status: false, message: "No menu found with this menu id" });
    }

    let deleteMenu = await menuModel.deleteOne({ _id: menuId });

    if (!deleteMenu) {
      return res
        .status(404)
        .send({ status: false, message: "Menu not found or already deleted" });
    }

    // let deleteMenu = menu.toolsName.splice(idx, 1);

    // await menu.save();

    return res
      .status(200)
      .send({ status: true, message: "Menu deleted successfully" });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { addMenu, getAllMenus, getMenuById, updateMenuById, deleteMenuById };
