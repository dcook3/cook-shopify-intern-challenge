import usePost from '../hooks/usePost.js';
import { useState, useEffect } from 'react';

const PostBox = () => {
    const {response, isLoading, error, postData} = usePost(); 
    const [postText, setPostText] = useState('');
    const [AIResponses, setAIResponses] = useState([]);

    const handlePostBody = (e) => {
        setPostText(e.target.value);
    }

    const handlePost = (e) => {
        e.preventDefault();
        postData({"prompt": postText, "temperature": 0, "max_tokens": 6});
    }

    if(isLoading){
        return(
            <div className="spinner-border spinner-border-xl" role="status">
                <span>Loading...</span>
            </div>
        )
    }

    if(error){
        return (
            <>
                <section className="d-flex flex-column align-items-center m-2">
                    <div className="form-group col-6">
                        <label className="form-label" for="prompt">Enter prompt</label>
                        <textarea className="form-control" name="prompt" style={{height: 200}} onChange={handlePostBody} value={postText}></textarea>
                    </div>
                    
                    <button className="btn btn-primary col-1 mt-1" onClick={handlePost}>Post</button>
                </section>
                <div className="text-danger fs-3 text-center">
                    {error.name}: {error.message}
                </div>
            </>
        )
    } 

    if(!response){
        return (
            <section className="d-flex flex-column align-items-center m-2">
                <div className="form-group col-6">
                    <label className="form-label" for="prompt">Enter prompt</label>
                    <textarea className="form-control" name="prompt" style={{height: 200}} onChange={handlePostBody} value={postText}></textarea>
                </div>
                
                <button className="btn btn-primary col-1 mt-1" onClick={handlePost}>Post</button>
            </section>
        )
    }else{
        AIResponses.forEach( resp => { 
                if(AIResponses.indexOf(resp) === -1)
                { 
                    AIResponses.push({prompt: postText, response: response.data.choices[0].text})
                }
            });
        console.log(AIResponses);
        return (
            <>
                <section className="d-flex flex-column align-items-center m-2">
                    <div className="form-group col-6">
                        <label className="form-label" for="prompt">Enter prompt</label>
                        <textarea className="form-control" name="prompt" style={{height: 200}} onChange={handlePostBody} value={postText}></textarea>
                    </div>
                    
                    <button className="btn btn-primary col-1 mt-1" onClick={handlePost}>Post</button>
                </section>
                <section>
                    {AIResponses && AIResponses.map(resp =>{
                        return (
                            <div class>
                                <table>
                                    <tr>
                                        <td className="fw-bold">Prompt:</td>
                                        <td>{resp.prompt}</td>
                                    </tr>
                                    <tr>
                                        <td className="fw-bold">Response:</td>
                                        <td>{resp.response}</td>
                                    </tr>
                                </table>
                            </div>
                        )
                    })}
                </section>
            </>
        )
    }
    
}

export default PostBox;