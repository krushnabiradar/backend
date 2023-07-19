import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for the Movie collection
const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    yearOfRelease: {
      type: Number,
      required: true,
    },
    actors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Actor",
      },
    ],
    producer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producer",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Movie", movieSchema);
