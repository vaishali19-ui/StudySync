const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors()); 
app.use(express.json()); 

app.get('/api/health', (req, res) => {
res.json({ status: 'StudySync backend is alive!' });
});
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB error:', err));
const PORT = process.env.PORT || 5000;
const subjectRoutes = require('./routes/subjects');
app.use('/api/subjects', subjectRoutes);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));