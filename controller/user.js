const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, ValidationResult } = require("express-validator");
const User = require("../model/user");

//@route      Post api/auth
//@desc       Authenticate user and get token
//@access     public
(exports.createUser = []),
  async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Server error" });
    }
  };
