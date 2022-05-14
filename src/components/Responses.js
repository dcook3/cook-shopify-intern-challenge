import { selectAllResponses } from './responseSlice.js';
import { useSelector } from 'react-redux';

const Responses = () => {
    const responses = useSelector(selectAllResponses);
    responses.length && responses.map(resp =>{
        return (
            <div className="my-2 p-4 border border-rounded">
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
    })
}

export default Responses;