const models = require("../models");
const User = models.user;
const TypeTrain = models.typetrain;
const Ticket = models.tickets;

// Add Ticket

exports.addticket = (req, res) => {
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

exports.getdetail = (req, res) => {
  const idPet = req.params.id;
  Ticket.findAll({
    include: [
      {
        model: TypeTrain,
        attributes: ["id", "name"]
      },
      {
        model: User,
        attributes: [
          "id",
          "name",
          "username",
          "email",
          "password",
          "gender",
          "phone",
          "address",
          "admin"
        ]
      }
    ],
    where: { id: idPet },
    attributes: [
      "id",
      "nameTrain",
      "dateStart",
      "startStation",
      "startTime",
      "destinationStation",
      "arrivalTime",
      "price",
      "qty"
    ]
  }).then(data => {
    if (data) {
      res.send(data);
    } else {
      res.status(400).send({
        error: true,
        message: "Error Get Data"
      });
    }
  });
};

//getall

exports.ticketAll = async (req, res) => {
  try {
    // const q = req.query;
    // console.log(q.param1);

    const data = await Ticket.findAll({
      include: [
        {
          model: TypeTrain
        }
      ]
    });
    res.send({ data });
  } catch (error) {
    res.send(error);
  }
};
