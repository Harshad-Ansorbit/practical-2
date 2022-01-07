import Homestyle from "./style.module.css";

export default function Footer() {
  return (
    <>
      <div className={Homestyle.sidebar}>
        <div className={Homestyle.sidebarItem}>
          <div className={Homestyle.profileImage}></div>
          <div className={Homestyle.sideNav}></div>
          <div className={Homestyle.sideNav}></div>
          <div className={Homestyle.sideNav}></div>
          <div className={Homestyle.sideNav}></div>
          <div className={Homestyle.sideNav}></div>
          <div className={Homestyle.sideNav}></div>
          <div className={Homestyle.sidebarLogo}></div>
        </div>
      </div>
    </>
  );
}
