import mongoose, { Schema } from "mongoose";

const foodSchema = new Schema({
    foodName: {
        type: String,
        required: [true, "foodName is required"],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },

});

export const Food = mongoose.model("Food", foodSchema);
