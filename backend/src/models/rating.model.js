import mongoose, { Schema } from "mongoose";

const ratingSchema = new Schema(
    {
        rating: {
            type: Number,
            required: true,
        },
        commnet: {
            type: String,
        },
    },
    { timestamps: true }
);

export const Rating = mongoose.model("Rating", ratingSchema);
