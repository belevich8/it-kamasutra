import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {

    let posts = [
        { id: 1, message: "Hi, how are you?", likesCount: "9" },
        { id: 2, message: "I'm fine thank you!", likesCount: "12" },
        { id: 2, message: "blablabla", likesCount: "4" },
        { id: 2, message: "hahaha", likesCount: "8" },
    ]
    let postElements =
        posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

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