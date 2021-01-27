import s from "./index.module.css";

export default function ProfileInfo() {
  return (
    <div className={s.item}>
      <img src="https://www.oliversacks.com/os/wp-content/uploads/2015/04/DSC_6976-opt.jpg" />
      <div className={s.info}>ava + description</div>
    </div>
  );
}
