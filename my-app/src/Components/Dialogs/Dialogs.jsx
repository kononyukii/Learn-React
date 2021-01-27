import Dialog from "./Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message";

export default function Dialogs(props) {

  return (
    <div className={s.dialogs}>
      <div className={s.interlocutors}>
        {props.users.map((user) => (
          <Dialog name={user.name} id={user.id} />
        ))}
      </div>
      <div className={s.messages}>
        {props.messages.map((message) => (
          <Message message={message.message} />
        ))}
      </div>
    </div>
  );
}
