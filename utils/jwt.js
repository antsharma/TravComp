const jwt = require("jsonwebtoken");

exports.createJWT = (user) => {
  return jwt
    .sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.SECRET,
      { expiresIn: "24h" }
    )
    .split(".");
};

exports.clearRes = (data) => {
  const { password, __v, updatedAt, ...cleanedData } = data;

  return cleanedData;
};
