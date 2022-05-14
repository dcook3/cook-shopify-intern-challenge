import axios, { Axios } from 'axios';
import { useState } from 'react';

const usePost = () => {
    const [response, setResponse] = useState(Axios.AxiosResponse);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const postData = async (data) => {
        await axios.post("https://api.openai.com/v1/engines/text-curie-001/completions", data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ` //IMPORTANT: CHANGE THIS ASAP, NO PLAIN TEXT KEY!
            }
        })
        .then((res) => {
            setIsLoading(true);
            setResponse(res);
        })
        .catch((error) => {
            setError(error)
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
    return {response, isLoading, error, postData};

}

export default usePost;