import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {




    let usersElements = 
        props.users.map ( d => <DialogItem user={d.user} id={d.id} /> );
        
    let messagesElements = 
        props.messages.map ( m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {usersElements }
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;