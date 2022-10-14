const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema(
    {
        fullName: {
            required: [true, "Full name is required"],
            type: String,
        },
        color: {
            required: [true, "colour is required"],
            type: String,
        },
        weight: {
            required: [true, "weight is required"],
            type: Number,
        },
        country: {
            required: [true, "country is required"],
            type: String,
        },
        totalCost: {
            required: [true, "total cost is required"],
            type: Number,
        }
       

    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model("Details", orderSchema);

