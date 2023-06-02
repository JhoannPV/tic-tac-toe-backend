const { v4: uuid } = require("uuid");
const Winner = require("../database/Winner");

const getAllWinners = async () => {
  try {
    const allWinners = await Winner.getAllWinners();
    return allWinners;
  } catch (error) {
    throw error;
  }
};

const getOneWinner = async (winnerId) => {
  try {
    const winner = await Winner.getOneWinner(winnerId);
    return winner;
  } catch (error) {
    throw error;
  }
};

const createNewWinner = async (newWinner) => {
  const winnerToInsert = {
    ...newWinner,
    fecha: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
    actualizado: new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }),
  };

  try {
    const createdWinner = await Winner.createNewWinner(winnerToInsert);
    return createdWinner;
  } catch (error) {
    throw error;
  }
};

const updateOneWinner = async (winnerId, changes) => {
  try {
    const updatedWinner = await Winner.updateOneWinner(winnerId, changes);
    return updatedWinner;
  } catch (error) {
    throw error;
  }
};

const deleteOneWinner = async (winnerId) => {
  try {
    const deletedWinner = await Winner.deleteOneWinner(winnerId);
    return deletedWinner;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWinners,
  getOneWinner,
  createNewWinner,
  updateOneWinner,
  deleteOneWinner,
};
