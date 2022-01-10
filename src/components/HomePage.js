import Homestyle from "./style.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Graph from "./Graph";
import Cards from "./Cards";
import Table from "./Table";

export default function HomePage() {
  return (
    <>
      <div className={Homestyle.container}>
        <Sidebar />
        <div className={Homestyle.content}>
          <Navbar />
          <div className={Homestyle.main}>
            <div className={Homestyle.wrapper}>
              <Graph />
              <Cards />
            </div>

            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
