// import "./App.css";
import DashBoard from "./components/DashBoard/DashBoard";
import Head from "./components/Head/Head";
import Sidebar from "./components/SideBar/SideBar";
import "./index.scss";

function App() {
  return (
    <div>
      <Head />
      <div className="DAT_Container">
        <Sidebar />
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
