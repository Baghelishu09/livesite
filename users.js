const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    uname: String,
    email: String,
    subject: String,
    message: String
});

const Feedback = mongoose.model('Feedback', userSchema);

module.exports = Feedback;


