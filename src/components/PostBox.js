import usePost from '../hooks/usePost.js';
import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { addResponse } from './responseSlice.js';
import Responses from './Responses.js'

const PostBox = () => {
    const {response, isLoading, error, postData} = usePost(); 
    const [postText, setPostText] = useState('');
    const dispatch = useDispatch();

    const handlePostBody = (e) => {
        setPostText(e.target.value);
    }

    const handlePost = (e) => {
        e.preventDefault();
        postData({"prompt": postText, "temperature": 0, "max_tokens": 1});
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
                        <label className="form-label" htmlFor="prompt">Enter prompt</label>
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
                    <label className="form-label" htmlFor="prompt">Enter prompt</label>
                    <textarea className="form-control" name="prompt" style={{height: 200}} onChange={handlePostBody} value={postText}></textarea>
                </div>
                
                <button className="btn btn-primary col-1 mt-1" onClick={handlePost}>Post</button>
            </section>
        )
    }else{
        
        return (
            <section className="d-flex flex-column align-items-center m-2">
                <div className="form-group col-6">
                    <label className="form-label" htmlFor="prompt">Enter prompt</label>
                    <textarea className="form-control" name="prompt" style={{height: 200}} onChange={handlePostBody} value={postText}></textarea>
                </div>
                
                <button className="btn btn-primary col-1 mt-1" onClick={handlePost}>Post</button>
            </section>
        )
    }
    
}

export default PostBox;