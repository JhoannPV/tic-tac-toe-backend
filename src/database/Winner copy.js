const { connection } = require("./config.db");

/**
 * @openapi
 * components:
 *   schemas:
 *     Winner:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: X
 *         date:
 *           type: string
 *           example: 14/05/2023
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */

const getAllWinners = (filterParams) => {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM winners";
    if (filterParams.name) {
      query += " where nombre='" + filterParams.name + "'";
    }
    console.log(query);
    connection.query(query, (error, results) => {
      if (error) reject({ status: 500, message: error });
      resolve(Object.values(JSON.parse(JSON.stringify(results))));
    });
  });
};

const getOneWinner = (winnerId) => {
  try {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM winners where id='" + winnerId + "'", (error, results) => {
        if (error) reject({ status: 500, message: error });
        if (Object.values(JSON.parse(JSON.stringify(results))).length === 0) {
          reject({
            status: 400,
            message: `Can't find winner with the id '${winnerId}'`,
          });
        }
        resolve(Object.values(JSON.parse(JSON.stringify(results))));
      });
    });
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewWinner = (newWinner) => {
  try {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO winners(nombre, fecha, actualizado) VALUES (?,?,?) ", [newWinner.nombre, newWinner.fecha, newWinner.actualizado], (error, results) => {
        if (error) reject(error);
        resolve(JSON.parse(JSON.stringify(results)));
      });
    });
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneWinner = (winnerId, changes) => {
  try {
    return new Promise((resolve, reject) => {
      let query = `UPDATE winners SET nombre="${changes.nombre}", fecha="${changes.fecha}", actualizado="${changes.actualizado}" WHERE id="${winnerId}"`;
      connection.query(query, (error, results) => {
        if (error) {
          reject(error.sqlMessage);
        }
        resolve(JSON.parse(JSON.stringify(results)));
      });
    });
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneWinner = (winnerId) => {
  try {
    return new Promise((resolve, reject) => {
      connection.query("Delete from winners where id = ?", [winnerId], (error, results) => {
        if (error) reject(error);
        resolve(JSON.parse(JSON.stringify(results)));
      });
    });
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = { getAllWinners, createNewWinner, getOneWinner, deleteOneWinner, updateOneWinner };
