const User = require("../models/user");
const bcrypt = require("bcrypt");
const { findOne } = require("../models/book");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, saltRounds);
  const data = { ...req.body, password };
  const user = await User.create(data);
  res.json({ user });
};
exports.login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).json({ error: "user not found" });
    return;
  }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    res.status(404).json({ error: "Wrong password" });
    return;
  }
  const _token = jwt.sign({user},"jwt-fake-token")
  res.json({ user ,acessToken: _token});
};
