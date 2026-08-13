const mongoose = require('mongoose');
const subtopicSchema = new mongoose.Schema({
title: String,
statusByUser: { type: Map, of: String, default: {} }, 
}
);
const topicSchema = new mongoose.Schema({
topic: String,
subtopics: [subtopicSchema],
});
const subjectSchema = new mongoose.Schema({
name: String,
isGroup: { type: Boolean, default: false },
members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
syllabus: [topicSchema],
theme: { type: String, default: 'pinkBloom' },
}, { timestamps: true });
module.exports = mongoose.model('Subject', subjectSchema);