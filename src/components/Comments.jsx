import { useSelector, useDispatch } from "react-redux";
import {addComment, changeCommentVal, deleteComment} from "../libs/store/features/comments";

export default function Comments() {
    const dispatch = useDispatch();
    const comments = useSelector((state)=>{return state.comments.comments});
    const commentVal = useSelector((state)=>{return state.comments.commentVal});

    const handleChangeCommentVal = (e)=>{
        dispatch(changeCommentVal(e.target.value));
    }
    
    const handleAddComment = () => {
        dispatch(addComment({id: comments.length, value: commentVal}));
    }

    const handleDeleteComment = (e) => {
        dispatch(deleteComment(e.target.getAttribute('data-id')));
    }

    return (
        <div className="comments__main">
            
            <div className="flex mx-auto items-center justify-center shadow-lg mt-1 mx-8 mb-4 max-w-lg">
                <div className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                        <div className="w-full md:w-full px-3 mb-2 mt-2">
                            <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" 
                            value={commentVal} 
                            onChange={handleChangeCommentVal} 
                            name="body"
                             placeholder='Type Your Comment' 
                             required>

                             </textarea>
                        </div>
                        <div className="w-full md:w-full flex items-start md:w-full px-3">
                            <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                                <svg fill="none" className="w-5 h-5 text-gray-600 mr-1" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <p className="text-xs md:text-sm pt-px">Some HTML is okay.</p>
                            </div>
                            <div className="mr-1">
                                <input type='button' className="px-2 py-1 text-blue-700 font-bold rounded hover:bg-blue-500 hover:text-gray-100" value='Post Comment'  onClick={handleAddComment}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <ul className="flex justify-center items-center flex-col">
                {comments.map((item)=>{
                    return (
                        <li className="w-2/4 px-10 my-4 py-6 bg-white rounded-lg shadow-md" key={item.id}>
                            <div className="flex justify-between items-center">
                                <span className="font-light text-gray-600">
                                    "mar 10, 2019"
                                </span>
                                <button
                                className="px-2 py-1 bg-red-600 text-gray-100 font-bold rounded hover:bg-red-500"
                                href="/#"
                                onClick={handleDeleteComment}
                                data-id={item.id}
                                >
                                    Remove
                                </button>
                            </div>
                            <div className="mt-2">
                                <p className="mt-2 text-gray-600">
                                    {item.value}
                                </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <a
                                className="px-2 py-1 text-blue-700 font-bold rounded hover:bg-blue-500 hover:text-gray-100"
                                href="/#"
                                >
                                    Comments
                                </a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}