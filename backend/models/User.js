const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
googleId: String,
name: String,
email: String,
subjectsJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
});
module.exports = mongoose.model('User', userSchema);