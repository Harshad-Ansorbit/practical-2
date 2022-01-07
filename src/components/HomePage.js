import Homestyle from "./style.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Graph from "./Graph";
import Cards from "./Cards";
import Table from "./Table";

export default function HomePage() {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className={Homestyle.container}>
        <Sidebar />
        <div className={Homestyle.content}>
          <Navbar />
          <div className={Homestyle.main}>
            <Graph />
            <Cards />
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
