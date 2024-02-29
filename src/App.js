// import "./App.css";
import { Router, Route, Link, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard/DashBoard";
import Head from "./components/Head/Head";
import Sidebar from "./components/SideBar/SideBar";
import "./index.scss";
import Account from "./components/Pages/Account";
import Authenticate from "./components/Pages/Authenticate"

function App() {
  return (
    <div>
      <Head />
      <div className="DAT_Container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<DashBoard />}></Route>
          <Route path="/pages/account" element={<Account />}></Route>
          <Route path="/pages/authenticate" element={<Authenticate />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
