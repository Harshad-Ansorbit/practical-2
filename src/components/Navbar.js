import Homestyle from "./style.module.css";

export default function Navbar() {
  return (
    <div className={Homestyle.navbar}>
      <div className={Homestyle.navbarItem}>
        <div className={Homestyle.title}></div>
        <div className={Homestyle.avtar}></div>
      </div>
    </div>
  );
}
