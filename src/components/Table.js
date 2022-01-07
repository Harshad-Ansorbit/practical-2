import Homestyle from "./style.module.css";

export default function Table() {
  return (
    <>
      <div className={Homestyle.table}>
        <div className={Homestyle.tableRow}></div>
        <div className={Homestyle.tableRow}></div>
        <div className={Homestyle.tableRow}></div>
      </div>
    </>
  );
}
