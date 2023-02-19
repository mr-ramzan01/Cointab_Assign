const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        cell: {type: String, required: false},
        email: {type: String, required: true},
        gender: {type: String, required: false},
        phone: {type: String, required: false},
        dob: {type: Object, required: false},
        id: {type: Object, required: false},
        location: {type: Object, required: false},
        login: {type: Object, required: false},
        name: {type: Object, required: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
)

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;