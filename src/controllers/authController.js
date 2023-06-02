const authService = require("../services/authService");

const signIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await authService.signIn({ username, password });
    res.status(200).send({ status: "OK", data: token });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const signUp = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const createdUser = await authService.signUp({ username, email, password, role });
    res.send({ status: "OK", data: createdUser });
  } catch (error) {
    res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  signIn,
  signUp,
};
