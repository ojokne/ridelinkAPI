const { Admin, Driver, Client, TruckOwner } = require("../models");

const getUser = async (id, role) => {
  let user = null;
  switch (role) {
    case 0: {
      try {
        user = await Admin.findByPk(id);
      } catch (e) {
        console.log(e);
      }
      break;
    }
    case 1: {
      try {
        user = await Driver.findByPk(id);
      } catch (e) {
        console.log(e);
      }
      break;
    }
    case 2: {
      try {
        user = await Client.findByPk(id);
      } catch (e) {
        console.log(e);
      }
      break;
    }
    case 3: {
      try {
        user = await TruckOwner.findByPk(id);
      } catch (e) {
        console.log(e);
      }
      break;
    }
    default:
  }
  return user;
};

module.exports = getUser;
