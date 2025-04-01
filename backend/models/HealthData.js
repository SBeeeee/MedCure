import mongoose from "mongoose";

const healthDataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    spO2: {
        type: Number,
        required: true
    },
    ecg: {
        type: Number,
        required: true
    },
    heartRate: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export const HealthData = mongoose.model("HealthData", healthDataSchema);