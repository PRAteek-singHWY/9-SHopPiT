import express from 'express';
import bcrypt from 'bcrypt';
import User from '../mongoDB/models/users.js';
import jwt from 'jsonwebtoken';

const router = express.Router();
const secretKey = 'your_secret_key';
const token = jwt.sign(payload, secretKey);

router.post('/google', async (req, res) => {
  // Handle Google login logic here
  // ...
  try {
    // Check if the user exists in the database based on GoogleId
    const { GoogleId } = req.body;
    const user = await User.findOne({ GoogleId });
    console.log(GoogleId)
    if (!user) {
      return res.status(401).json({ message: 'User Not Found,Sign Up To Continue' });
    }
    const payload = { userId: GoogleId };
    const secretKey = 'RandomSecretKey123'; // Replace with your actual secret key

    // Generate session/token for successful login
    const token = jwt.sign(payload, secretKey);




    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Login Failed, Try Again' });
  }
});

router.post('/manual', async (req, res) => {
  // Handle manual login logic here
  // ...
  try {
    // Retrieve email and password from request body
    const { email, password } = req.body;

    // Check if the user exists in the database based on the email
    const user = await User.findOne({ Email: email });

    if (!user) {
      return res.status(401).json({ message: 'User Not Found,Sign Up To Continue' });
    }

    // Compare the entered password with the stored hashed password
    const passwordMatch = bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate session/token for successful login
    const token = generateToken(); // Implement your token generation logic here

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Login Failed, Try Again' });
  }
});

export default router;

