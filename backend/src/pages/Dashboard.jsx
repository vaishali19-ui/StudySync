import { useState, useEffect } from 'react';
import { getSubjects } from '../api/subjects';
import html2pdf from 'html2pdf.js';
function Dashboard({ userId }) {
const [subjects, setSubjects] = useState([]);
useEffect(() => {
getSubjects(userId).then(setSubjects);
}, [userId]);
return (
<div>
{subjects.map((s) => <div key={s._id}>{s.name}</div>)}
</div>
);
}

function exportToPDF() {
  const element = document.getElementById('syllabus-view');
  html2pdf().from(element).save('studysync-progress.pdf');
}