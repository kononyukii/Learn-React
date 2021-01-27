import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

export default function Dialog(props) {
  return (
    <div className={s.interlocutor}>
      <div>
        <img
          src={props.ava}
          alt="ava"
        />
        <NavLink to={"/dialogs/" + props.id} activeClassName={s.active}>
          {props.name}
        </NavLink>
      </div>
    </div>
  );
}
