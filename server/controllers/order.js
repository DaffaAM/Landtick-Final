const models = require("../models");
const User = models.user;
const TypeTrain = models.typetrain;
const Ticket = models.tickets;
const Payment = models.payment;
const Order = models.order;

exports.add = (req, res) => {
  const {
    nameTrain,
    typetrain_id,
    dateStart,
    startStation,
    startTime,
    destinationStation,
    arrivalTime,
    price,
    qty
  } = req.body;

  const addTiket = {
    nameTrain,
    typetrain_id: typetrain_id.id,
    dateStart,
    startStation,
    startTime,
    destinationStation,
    arrivalTime,
    price,
    qty
  };

  exports.order = async (req, res) => {
    try {
      const { no_invoice, id_tiket, qty, totalPrice } = req.body;

      const payment = {
        qty,
        totalPrice,
        status: "Pending",
        attachment: "bca.jpg"
      };
      const data = await Payment.create(payment);

      const order = {
        no_invoice,
        id_tiket,
        id_user: req.user.userId,
        id_payment: data.id
      };
      const data2 = await Order.create(order);
      res.send({
        msg: "Success"
      });
    } catch (error) {
      res.status(401).send({
        msg: "Error"
      });
    }
  };

  Ticket.create(addTiket)
    .then(tiket => {
      if (tiket) {
        res.send({
          message: "success add ticket"
        });
      }
    })
    .catch(err => {
      return res.send({
        message: err.message
      });
    });
};

exports.listOrder = async (req, res) => {
  try {
    const data = await Order.findAll({
      include: [
        {
          model: User
        },
        {
          model: Payment
        },
        {
          model: Ticket
        }
      ]
    });
    res.send({
      data
    });
  } catch (error) {
    res.send(error);
  }
};

exports.listOrderDetail = async (req, res) => {
  try {
    const data = await Order.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: User
        },
        {
          model: Payment
        },
        {
          model: Ticket,
          include: [
            {
              model: TypeTrain
            }
          ]
        }
      ]
    });
    res.send({
      data
    });
  } catch (error) {
    res.send(error);
  }
};
