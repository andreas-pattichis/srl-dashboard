import axios from 'axios';

export const submitQuestions = (questions) => {
    console.log(import.meta.env.VITE_API_URL + '/essays/submit')
    return axios.post(import.meta.env.VITE_API_URL + '/essays/submit', questions);
};