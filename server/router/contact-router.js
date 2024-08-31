const express = require('express');
const multer = require('multer');
const applicationController = require('../Controllers/contact-controller');

const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// POST /api/form
router.post('/', upload.single('resume'), applicationController.submitApplication);

module.exports = router;
