const cartSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        items: [
            {
                food: {
                    type: Schema.Types.ObjectId,
                    ref: "Food",
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],
        totalPrice: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
