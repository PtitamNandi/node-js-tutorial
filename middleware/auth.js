const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const User = require("../models/user");

const auth = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization
    //&& req.headers.authorization.split(" ")[1]
  ) {
    // const token = req.headers.authorization.split(" ")[1];

    const token = req.headers.authorization;

    try {
      const decode = await jwt.verify(token, "jwt-fake-token");

      const user = await User.findOne({ _id: ObjectId(decode.user._id) });
      if (!user) {
        res.status(401).json({ error: "Unauthoraized" });
        return;
      }
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Unaauthorized request" });
    }
  }
};
module.exports = auth;
