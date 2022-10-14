const expressAsyncHandler = require("express-async-handler");
const Details = require("../model/OrderModel");

const createCargo = expressAsyncHandler(async (req, res) => {
  const { fullName, weight, country, color } = req.body;

  try {
    const constPerEachCountry = {
      sweden: 7.35,
      china: 11.53,
      brazil: 15.63,
      australia: 50.09,
    };
    const cost = constPerEachCountry[country];
    const eachBox = 10;
    const noOfBoxes = Math.ceil(weight / eachBox);
    const totalCost = noOfBoxes * cost;

    const order = await Details.create({
      fullName,
      weight,
      country,
      color,
      totalCost,
    });
    res.status(200).json(order);
  } catch (error) {
    throw new Error(error.message);
  }
});

const getAll = expressAsyncHandler(async (req, res) => {
  try {
    const details = await Details.find({});
    res.status(200).json(details);
  } catch (error) {
    throw new Error(error.message);
  }
});

module.exports = {
  createCargo,
  getAll,
};
