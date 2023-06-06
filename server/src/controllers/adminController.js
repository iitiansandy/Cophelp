const adminModel = require("../models/adminModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { isValid, isvalidEmail } = require("../utils/utils");

// ADD ADMIN
const signUpAdmin = async (req, res) => {
  try {
    let data = req.body;
    let { email, password } = data;

    if (!isValid(email)) {
      return res
        .status(400)
        .send({ status: false, message: "Email is required" });
    }

    if (!isvalidEmail(email)) {
      return res.status(400).send({ status: false, message: "Invalid email" });
    }

    if (!isValid(password)) {
      return res
        .status(400)
        .send({ status: false, message: "Password is required" });
    }

    let hashedPassword = await bcrypt.hash(password, 10);

    password = hashedPassword;

    let adminData = {
      email,
      password,
    };

    let addAdmin = await adminModel.create(adminData);

    return res
      .status(201)
      .send({ status: false, message: "Admin signup", data: addAdmin });
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

// ADMIN LOGIN
const loginAdmin = async (req, res) => {
  try {
    let data = req.body;

    let { email, password } = data;

    if (!isValid(email)) {
      return res
        .status(400)
        .send({ status: false, message: "Email is required" });
    }

    if (!isvalidEmail(email)) {
      return res.status(400).send({ status: false, message: "Invalid email" });
    }

    if (!isValid(password)) {
      return res
        .status(400)
        .send({ status: false, message: "Password is required" });
    }

    let admin = await adminModel.findOne({ email: email });

    if (!admin) {
      return res
        .status(404)
        .send({ status: false, message: "Admin not found" });
    }

    bcrypt.compare(password, admin.password, function (err, result) {
      if (err) {
        return res.status(400).send({ status: false, message: err.message });
      }

      hasAccess(result);
    });

    function hasAccess(result) {
      if (result) {
        let date = Date.now();
        let time = Math.floor(date / 1000);

        let token = jwt.sign(
          {
            email: admin.email,
            adminId: admin._id,
            iat: time,
          },
          process.env.TOKEN_SECRET_KEY || "admin@cophelp@123",
          { expiresIn: "24h" }
        );
        data.adminId = admin._id;
        data.token = token;

        res.setHeader("Authorization", "Bearer", token);
        delete data.password;
        return res
          .status(200)
          .send({ status: true, message: "Successfully loggedin", data: data });
      } else {
        return res.status(401).send({ status: false, message: "Login denied" });
      }
    }
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = { signUpAdmin, loginAdmin };
