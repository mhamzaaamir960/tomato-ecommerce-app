import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        categoryName: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
