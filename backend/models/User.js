import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    // userId: { type: String, required: true, unique: true }, // Unique user ID (e.g., Firebase UID or JWT ID)

    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
