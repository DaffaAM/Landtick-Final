const express = require("express");
require("express-group-routes");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

//init bodyParser
const bodyParser = require("body-parser");

//define the server port
const port = process.env.PORT || 3900;

//allow this app to receive incoming json request
app.use(bodyParser.json());

// const tes = app.get("/", (req, res) => {
//   res.send("Hello Express");
// });
// const { authenticated }

const { authenticated } = require("./middleware");

const UserController = require("./controllers/auth");
const TicketController = require("./controllers/ticket");
const OrderController = require("./controllers/order");
const PaymentController = require("./controllers/payment");

app.group("/api/v1", router => {
  router.post("/login", UserController.login);
  router.post("/register", UserController.register);
  router.get("/checkuser", authenticated, UserController.cekUser);

  router.post("/ticket", authenticated, TicketController.addticket);
  router.get("/tickets", TicketController.ticketAll);
  // router.get("/listorder/:id", authenticated, OrderController.listOrderDetail);
  router.get("/listorder", authenticated, OrderController.listOrder);
  router.post("/orderticket",authenticated, OrderController.userOrder);
  router.get("/listorderAll", authenticated, OrderController.listOrderAdm)
  // payment
  router.delete("/deleteorder/:id", OrderController.deleteOrder)
  router.get("/gettopay", authenticated, OrderController.payInvoice);
  router.get("/payment", authenticated, PaymentController.payment);
  router.get("/tfstatus", authenticated, PaymentController.transfer);
  router.patch("/payment/:id", authenticated, PaymentController.updatePayment);
  router.delete("/payment/:id", authenticated, PaymentController.deletePayment);
  router.get("/checkstatus", PaymentController.checkstatus);
  // router.get("/my_tickets/:id", OrderController.getdetail);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
