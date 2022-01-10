import Loaderstyle from "./HomeLoader.module.css";
export default function HomeLoader() {
  return (
    <>
      <div className={Loaderstyle.container}>
        <div className={Loaderstyle.mainfram}></div>
        <div>
          <div className={Loaderstyle.logo}></div>
          <div className={Loaderstyle.caption}></div>
        </div>
      </div>
    </>
  );
}
