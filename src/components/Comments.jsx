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
            comments block
            <div className="comments__main-add">
                <textarea name="commnetInput" cols="50" rows="5" value={commentVal} onChange={handleChangeCommentVal}></textarea>
                <button onClick={handleAddComment}>Add Commnet</button>
            </div>
            <div className="comments__main-comments">
                {comments.map((item)=>{
                    return (
                    <div className="comment" key={item.id}>
                       <p>{item.value}</p>
                       <button className="remove-button" onClick={handleDeleteComment} data-id={item.id}>Remove</button>
                    </div>)
                })}
            </div>
        </div>
    );
}