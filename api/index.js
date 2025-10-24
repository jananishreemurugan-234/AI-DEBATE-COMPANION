import axios from "axios";

// Replace with your IP address
const API_BASE_URL = "http://10.135.152.127:5000/api";

export const getRandomTopic = () => axios.get(`${API_BASE_URL}/random-topic`);
export const getRandomOpponent = () => axios.get(`${API_BASE_URL}/random-opponent`);
export const generateOpponent = (data) => axios.post(`${API_BASE_URL}/generate-opponent`, data);
export const judgeDebate = (data) => axios.post(`${API_BASE_URL}/judge-debate`, data);
export const getDebateHistory = () => axios.get(`${API_BASE_URL}/history`);
