import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: function () {
      return !this.GoogleId; // Required for manual registration, not for Google login
    },
  },
  LastName: {
    type: String,
    required: function () {
      return !this.GoogleId; // Required for manual registration, not for Google login
    },
  },
  Name: {
    type: String,
    required: function () {
      return !!this.GoogleId; // Required for Google login, not for manual registration
    },
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: function () {
      return !this.GoogleId; // Required for manual registration, not for Google login
    },
  },
  ConfirmPassword: {
    type: String,
    required: function () {
      return !this.GoogleId; // Required for manual registration, not for Google login
    },
  },
  ProfilePicture: {
    type: String,
    required: function () {
      return !!this.GoogleId; // Required for Google login, not for manual registration
    },
  },
  GoogleId: {
    type: String,
    required: function () {
      return !!this.ProfilePicture; // Required for Google login, not for manual registration
    },
  },
  // Add more fields as needed
});

const User = mongoose.model("User", userSchema);

export default User;
