import Homestyle from "./style.module.css";

export default function Cards() {
  return (
    <>
      <div className={Homestyle.cards}>
        <div className={Homestyle.card}></div>
        <div className={Homestyle.card}></div>
        <div className={Homestyle.card}></div>
        <div className={Homestyle.card}></div>
      </div>
    </>
  );
}
