const models = require("../models");
const User = models.user;
const Type = models.typetrain;
const Ticket = models.tickets;
const Payment = models.payment;
const Order = models.order;

exports.payment = async (req, res) => {
  try {
    const data = await Order.findAll({
      where: { id_user: req.user.userId },
      include: [
        {
          model: Payment
        },
        {
          model: User
        },
        {
          model: Ticket,
          include: [
            {
              model: Type
            }
          ]
        }
      ]
    });

    res.send({
      data
    });
  } catch (error) {
    console.log(req.user.userId);
    res.send(error);
  }
};

exports.transfer = async (req, res) => {
  try {
    const data = await Order.findAll({
      where: { id_user: req.user.userId },
      include: [
        {
          model: Payment,
          where: { status: "Pending" }
        },
        {
          model: User
        },
        {
          model: Ticket,
          include: [
            {
              model: Type
            }
          ]
        }
      ]
    });

    res.send({
      data
    });
  } catch (error) {
    console.log(req.user.userId);

    res.status(401).send({
      message: "Error"
    });
  }
};

exports.updatePayment = async (req, res) => {
  try {
    const data = await Payment.update(req.body, {
      where: { id: req.params.id }
    });
    res.send({
      data
    });
  } catch (error) {
    res.status(401).send({
      message: error.message
    });
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const data = Order.destroy({
      where: { id_payment: req.params.id }
    });
    const data2 = Payment.destroy({
      where: { id: req.params.id }
    });
    res.send({
      msg: "data berhasil di delete",
      data,
      data2
    });
  } catch (error) {
    res.status(401).send({
      error: error.message
    });
  }
};

exports.checkstatus = async (req, res) => {
  try {
    const data = await Payment.findAll({
      where: { status: "Approved" }
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
