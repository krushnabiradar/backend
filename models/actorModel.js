import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for the Actor collection
const actorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    bio: {
      type: String,
      default: "",
      maxLength: 150,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Actor", actorSchema);
