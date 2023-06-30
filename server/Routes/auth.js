import express from 'express';
import bcrypt from 'bcrypt';
import User from '../mongoDB/models/users.js';
const router = express.Router();

router.route('/google').post(async (req, res) => {
  const { Name, Email, ProfilePicture, GoogleId } = req.body;
  try {
    // Check if the user already exists with the GoogleId or Email
    const user = await User.findOne({ $or: [{ GoogleId }, { Email }] });

    if (user) {
      return res.status(400).json({ message: 'Account with this Email already exists, Sign in to continue' });
    }

    const newUser = new User({
      Name,
      Email,
      ProfilePicture,
      GoogleId
    });

    await newUser.save();

    res.status(200).json({ message: 'Registered Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Registration Failed,Try Again Later' });
  }
});

router.route('/manual').post(async (req, res) => {
  const { FirstName, LastName, Email, password, ConfirmPassword } = req.body;
  try {
    // Check if the user already exists with the GoogleId or Email
    const user = await User.findOne({ Email });

    if (user) {
      return res.status(400).json({ message: 'Account with this Email already exists, Sign in to continue' });
    }

   

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      FirstName,
      LastName,
      Email,
      password: hashedPassword, // Save the hashed password
      ConfirmPassword
    });

    await newUser.save();

    res.status(200).json({ message: 'Registered Successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Registration Failed,Try Again Later' });
  }
});

export default router;
