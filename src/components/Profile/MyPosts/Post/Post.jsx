import s from './Post.module.css';

const Post = (props) => {
    return (        
        
        <div className={s.item}>
            <img src="https://www.pinclipart.com/picdir/big/164-1640714_user-symbol-interface-contact-phone-set-add-sign.png" alt="" />
            {props.message}
            <br/>
            <div className={s.like}>like {props.likesCount}</div>
        </div>
            
    )
}
export default Post;