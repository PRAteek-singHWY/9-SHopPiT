import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Design from '../mongoDB/models/design-post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

router.route('/').get(async (req, res) => {
  try {
    const posts = await Design.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
  }
});

router.route('/').post(async (req, res) => {
  try {
    const { name, photo, designName } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    //creating new post document with name prompt and phot0 as paarmeters of that post document
    const newPostDesign = await Design.create({
      name,
      photo: photoUrl.url,
      designName
    });

    res.status(200).json({ success: true, data: newPostDesign });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to upload a design, please try again' });
  }
});

export default router;