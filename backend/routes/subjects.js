const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');
// GET all subjects for a user
router.get('/', async (req, res) => {
const subjects = await Subject.find({ members: req.query.userId });
res.json(subjects);
});
// POST create a new subject
router.post('/', async (req, res) => {
const newSubject = new Subject(req.body);
await newSubject.save();
res.json(newSubject);
});
// PATCH update a subtopic's status
router.patch('/:subjectId/status', async (req, res) => {
const { topicIndex, subtopicIndex, userId, status } = req.body;
const subject = await Subject.findById(req.params.subjectId);
subject.syllabus[topicIndex].subtopics[subtopicIndex].statusByUser.set(userId, status);
await subject.save();
res.json(subject);
});
module.exports = router;
