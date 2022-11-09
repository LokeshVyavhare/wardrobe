const User = require("../features/user/user.model");

const authMiddleware = async (req, res, next) => {
  let { token } = req.headers;
  if (!token) {
    return res.status(404).send({ error: true, message: "No token found" });
  }
  let [id, email, type, password] = token.split("-");
  let user = await User.findById(id);
  if (!user) {
    return res.send({ error: true, message: "Invalid Token" });
  }
  if (
    user.email === email &&
    user.password === password &&
    user.type === type
  ) {
    req.id = id;
    req.userType = type;
    next();
  } else {
    res.status(401).send({
      error: true,
      message: "You are not authorised to do this operation!",
    });
  }
};

module.exports = authMiddleware;
