import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.user}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let users = [
        { id: 1, user: "Vasilich" },
        { id: 2, user: "Katya" },
        { id: 3, user: "Andrey" },
        { id: 4, user: "Dmitriy" },
        { id: 5, user: "Sveta" },
        { id: 6, user: "Masha" }
    ]
    let messages = [
        { id: 1, message: "Hello!" },
        { id: 2, message: "Hi!" },
        { id: 3, message: "How, are you?" },
        { id: 4, message: "I'm fine, and you?" },
        { id: 5, message: "I'm fine too;)" },
        { id: 5, message: "Oo, thats cool" }
    ]

    let usersElements = 
        users.map ( dialog => <DialogItem user={dialog.user} id={dialog.id} /> );
        
    let messagesElements = 
        messages.map ( m => <Message message={m.message} />);

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