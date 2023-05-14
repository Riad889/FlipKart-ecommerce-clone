const User = require("../models/SignUp-user");

//signUp

const signUp = async (req, res, next) => {
  const { firstName, lastName, userName, email, password, phoneNumber } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !userName ||
    !email ||
    !password ||
    !phoneNumber
  ) {
    return res.status(402).json({ message: "Please fill the all field" });
  } else {
    try {
      const existing_user = await User.findOne({ email });
      if (existing_user) {
        return res.status(400).json({ message: "User already exist" });
      } else {
        const user = new User({
          firstName,
          lastName,
          userName,
          email,
          password,
          phoneNumber,
        });
        await user.save();
        return res
          .status(202)
          .json({ message: "User is registered Successfully" });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
};

const LoginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(402).json({ message: "Please fill all required field" });
  } else {
    try {
      const existingUser = await User.findOne({
        email: email,
        password: password,
      });
      if (existingUser) {
        return res.status(202).json({ message: "User login Successful",data:existingUser });
      } else {
        return res.status(402).json({ message: "Invalid credential" });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
};

module.exports = { signUp, LoginUser };
