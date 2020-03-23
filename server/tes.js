exports.tes = (req, res) => {
  res.send("Hello Express");
};

exports.login = (req, res) => {
  const username = req.body.email;
  const password = req.body.password;
};
