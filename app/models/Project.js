var mongoose = require('mongoose');

// Create the Schema.
var projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    cover: {
        type: String,
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: [{
        image: String,
        url: String
    }],
    images: {
      type: [String],
      required: true
    },
    video: String,
    deployment: {
        image: String,
        name: String,
        url: String
    },
    git: String,
    partners: [{
        name: String,
        url: String
    }]
});

module.exports = mongoose.model('Project',projectSchema);
