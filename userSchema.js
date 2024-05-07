import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
  },
  userPass: {
    type: String,
  },
  userAge: {
    type: Number,
  },
});

const userModal = mongoose.model("user", userSchema);
export default userModal;
