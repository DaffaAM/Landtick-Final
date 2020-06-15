const models = require("../models");
const User = models.user;
const TypeTrain = models.typetrain;
const Ticket = models.tickets;
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
}

//   exports.listOrder = async (req, res) => {
//     try {
//       const data = await Order.findAll({
//         include: [
//           {
//             model: User
//           },
//           {
//             model: Ticket
//           },
//       ]
//     });
//     res.send({
//       data
//     });
//     console.log(data)
//   } catch (error) {
//     res.send(error);
//   }
// };

// exports.listOrderDetail = async (req, res) => {
//   try {
//     const data = await Order.findOne({
//       where: { id: req.params.id },
//       include: [
//         {
//           model: User
//         },
//         {
//           model: Ticket,
//           include: [
//             {
//               model: TypeTrain
//             }
//           ]
//         }
//       ]
//     });
//     res.send({
//       data
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };
    
exports.userOrder = (req, res) => {
  
  const {
    no_invoice,
    id_tiket,
    qty,
    total_price
  } = req.body
  
  const order = {
    no_invoice,
    barcode : "null",
    id_tiket,
    id_user : req.user.userId,
    qty,
    total_price,
    status: "pending",
    attachment: ''
  }

  
  console.log(order)
  Order.create(order).then(user => {
    if(user) {
      res.send({
        user
      })
    }
  }).catch(err => {
      return res.status(400).send({
          message: err.message
      });
  });

}


exports.listOrder = async (req, res) => {
  try {
    const data = await Order.findAll({
      where: { id_user: req.user.userId },

      include: [
        {
          model: User
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
    res.status(401).send({
      message: error.message
    });
  }
};


exports.listOrderAdm = async (req, res) => {
  try {
    const data = await Order.findAll({

      include: [
        {
          model: User
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
    res.status(401).send({
      message: error.message
    });
  }
};


exports.payInvoice = async (req, res) => {
  Order.findAll({
    where: {
      id_user: req.user.userId, status: "pending"
    },
    //include attributes 
    attributes:["id","no_invoice","barcode","qty","total_price","status", "attachment"],
    include:[{
      model:User,
      attributes: ["id", "name", "username", "email", "password", "gender", "phone", "address"]
    },
    {
      model:Ticket,
      attributes:["id", "nameTrain", "dateStart", "startStation", "startTime", "destinationStation", "arrivalTime", "price", "qty"],
      include: [{
        model: TypeTrain,
        attributes: ["id", "name"]
    }]  
    },
   
  ],
    
  }).then(data =>{
    res.send(data)
  })
}



exports.deleteOrder = async (req, res) => {
try {
   Order.destroy({
    where:{
      id: req.params.id
    }
  });
res.send({
  msg: "Order ini telah dihapus"
})
} catch (error) {
  res.send(error)
}
}