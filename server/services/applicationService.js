const Application = require('../models/contact-model');

exports.createApplication = async ({ fullName, email, phone, resume }) => {
    const application = new Application({
        username: fullName, // Change this to fullName to match the form data
        email,
        phone,
        resume,
    });
    return await application.save();
};
