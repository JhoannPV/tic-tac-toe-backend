const { User } = require("../models/users.model");

const getOneUser = async (username) => {
  try {
    const user = await User.findOne({ where: { username: username } });
    return user;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const createNewUser = async (newUser) => {
  try {
    const createdUser = await User.create(newUser);
    return createdUser;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

module.exports = { createNewUser, getOneUser };
