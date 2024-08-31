const Application = require("../models/contact-model");
const applicationService = require("../services/applicationService");

const submitApplication = async (req, res) => {
  try {
    const { username, email, phone } = req.body;
    const resume = req.file.path;

    // Check if an application with the same email already exists
    const applicationExist = await Application.findOne({ email });
    if (applicationExist) {
      return res.status(400).json({ msg: "An application with this email already exists" });
    }

    const newApplication = await applicationService.createApplication({ fullName: username, email, phone, resume });

    res.status(201).json({
      msg: "Application submitted successfully",
      applicationId: newApplication._id.toString(),
    });

  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json("Internal server error");
  }
};

module.exports = { submitApplication };