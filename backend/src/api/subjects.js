import axios from 'axios';
const API = 'http://localhost:5000/api';
export const getSubjects = (userId) =>
axios.get(`${API}/subjects?userId=${userId}`).then((res) => res.data);
export const createSubject = (data) =>
axios.post(`${API}/subjects`, data).then((res) => res.data);
export const updateStatus = (subjectId, payload) =>
axios.patch(`${API}/subjects/${subjectId}/status`, payload).then((res) => res.data);