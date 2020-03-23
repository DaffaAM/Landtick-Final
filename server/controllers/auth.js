const models = require("../models");
const jwt = require("jsonwebtoken");
const User = models.user;
const Order = models.order;

exports.login = (req, res) => {
  //check if email and pass match in db tbl user
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ where: { username, password } }).then(user => {
    if (user) {
      const token = jwt.sign({ userId: user.id }, "my-secret-key");
      res.send({
        username,
        admin: user.admin,
        token
      });
    } else {
      res.send({
        error: true,
        message: "Wrong Username or Password!"
      });
    }
  });
};
exports.register = (req, res) => {
  try {
    const {
      name,
      username,
      email,
      password,
      gender,
      phone,
      address
    } = req.body;
    // const { name, gender, about_pet } = req.body.pet;
    User.findOne({ where: { email } }).then(Email => {
      if (!Email) {
        User.create({
          name: name,
          username: username,
          email: email,
          password: password,
          gender: gender,
          phone: phone,
          address: address,
          admin: 0
        }).then(user => {
          const token = jwt.sign({ userId: user.id }, "my-secret-key");
          res.status(200).send({
            message: "success",
            token
          });
        });
      } else {
        res.status(201).send({
          status: 201,
          message: "email is already in use",
          data: req.body
        });
      }
    });
  } catch (error) {
    res.status(400).send({
      status: 400,
      email: "unique",
      password: "unique",
      message: "Bad Request",
      data: req.body
    });
  }
};

exports.cekUser = async (req, res) => {
  try {
    const data = await User.findOne({
      where: { id: req.user.userId },
      attributes: ["id", "admin", "name", "username", "email", "phone"]
    });
    res.send({
      data
    });
  } catch (error) {
    console.log(error.message);
    // res.status(401).send({
    //   data: "error"
    // });
  }
};
