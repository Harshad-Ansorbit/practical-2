import Homestyle from "./style.module.css";

export default function Graph() {
  return (
    <>
      <div className={Homestyle.graphs}>
        <div className={Homestyle.graph}>
          <div className={Homestyle.graphCategory}>
            <span className={Homestyle.category}></span>
            <span className={Homestyle.category}></span>
            <span className={Homestyle.category}></span>
          </div>
          <div className={Homestyle.graphContent}></div>
        </div>
        <div className={Homestyle.graph}>
          <div className={Homestyle.graphCategory}>
            <span className={Homestyle.category}></span>
            <span className={Homestyle.category}></span>
            <span className={Homestyle.category}></span>
          </div>
          <div className={Homestyle.graphContent}> </div>
        </div>
      </div>
    </>
  );
}
