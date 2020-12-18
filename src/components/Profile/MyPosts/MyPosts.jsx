import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {


    let postElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    return (
        <div>
            <h4>My posts</h4>
            <textarea></textarea>
            <div><button className={s.btn}>Add Post</button></div>
            {postElements}
        </div>
    )
}
export default MyPosts;