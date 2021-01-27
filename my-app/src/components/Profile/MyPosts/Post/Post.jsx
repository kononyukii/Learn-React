import s from "./Post.module.css";

export default function Post(props) {
  return (
    <div className={s.item}>
      <div>
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwnjIzZ98emcEKxHyXKjG_sexnQcnAxGXQrWG1psE0Q=s900-c-k-c0x00ffffff-no-rj"
          alt="ava"
        />
        <span className={s.message}>{props.message}</span>
      </div>
      <div>
        <span className={s.like}>like: {props.likeCounts}</span>
      </div>
    </div>
  );
}
