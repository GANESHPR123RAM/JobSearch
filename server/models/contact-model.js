const { Schema, model } = require("mongoose");

const ApplicationSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    resume: { type: String, required: true },
    appliedAt: { type: Date, default: Date.now },
});

module.exports = model('Application', ApplicationSchema);
