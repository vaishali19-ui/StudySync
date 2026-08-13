function TopicCheckbox({ subjectId, topicIndex, subtopicIndex, userId, currentStatus }) {
const handleChange = async (e) => {
await updateStatus(subjectId, {
topicIndex, subtopicIndex, userId, status: e.target.value
});
};
return (
<select defaultValue={currentStatus} onChange={handleChange}>
<option value="notstarted">Not Started</option>
<option value="inprogress">In Progress</option>
<option value="done">Done</option>
</select>
);
}
