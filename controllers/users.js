const { v4: uuid } = require("uuid");
let usersModel = [];

const createUser = (req, res) => {
  const user = req.body;
  const userId = uuid();
  console.log("userId is ", userId);
  const userWithId = { ...user, id: userId };
  console.log("User with id is ", userWithId);
  usersModel.push(userWithId);
  res.send(
    `User with name ${user.firstName} added to the database and id ${userWithId.id} added to the database`
  );
};
const getUserById = (req, res) => {
  const { id } = req.params;
  const foundUser = usersModel.find((user) => user.id === id);
  res.send(foundUser);
  console.log("Get id route");
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  usersModel = usersModel.filter((user) => user.id !== id);
  res.send(`User with id ${id} is deleted from your profile`);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = usersModel.find((user) => user.id == id);
  console.log("Id is ", id);
  console.log(user.id);
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with  id ${id} has been updated`);
};

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};
