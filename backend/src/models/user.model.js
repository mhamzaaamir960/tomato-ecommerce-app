import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        phoneNumber: {
            type: Number,
            required: [true, "Phone number is required"],
        },
        avatar: {
            type: String, // Cloudinary url
            required: [true, "Avatar is required"],
        },
        role: {
            type: String,
            default: "user",
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        refreshToken: {
            type: String,
        },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

export const User = mongoose.model("User", userSchema);
