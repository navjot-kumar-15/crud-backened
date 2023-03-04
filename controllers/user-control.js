import User from "../model/user.js";

//Saving the data by the user in the database
export const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Getting all the users details
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Getting the details of the single user
export const getUserById = async (req, res) => {
  // console.log(req.params.id);
  try {
    // const user = await User.find({ _id: req.params.id });
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Updating the user
export const editUser = async (req, res) => {
  let data = req.body;
  let editUser = new User(data);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(200).json(editUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Deleting the user
export const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "user has been deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
