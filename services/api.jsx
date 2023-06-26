import axios from "axios";

export const submitData = async (formData) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/login', formData);
        return response.data;
    } catch (error) {
        console.error('Error submitting data', error);
        throw error;
    }
}

export { submitData }