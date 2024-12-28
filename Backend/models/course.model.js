const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    img: {
        type: String, // Corrected from `img` to `String`
        required: true
    },
    data: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);
