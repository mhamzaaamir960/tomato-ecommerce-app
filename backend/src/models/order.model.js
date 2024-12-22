import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        orderItems: [
            {
                type: Schema.Types.ObjectId,
                ref: "Food",
            },
        ],
        totalPrice: {
            type: Number,
            default: 0,
        },
        address: {
            city: String,
            country: String,
            street: String,
            postalCode: Number,
        },
        orderStatus: {
            type: String,
            enum: ["Pending", "Delivered", "Cancelled"],
            default: "Pending",
        },
        orderDate: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

export const Order = mongoose.model("Order", OrderSchema);
