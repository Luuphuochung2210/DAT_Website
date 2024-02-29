import React, { useState } from 'react';
import "./SideBar.scss"
import { FiActivity, FiBox } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { CiRepeat } from "react-icons/ci";
import { FiLayout } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { LuBarChart } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [board, setBoard] = useState(true);
  const [page, setPage] = useState(false);
  const [app, setApp] = useState(false);
  const [flow, setFlow] = useState(false);
  const [layout, setLayout] = useState(false);
  const [component, setComponent] = useState(false);
  const [ults, setUlts] = useState(false);

  const showBoard = () => {
    if (board === true) {
      setBoard(false)
    } else {
      setBoard(true);
      setPage(false);
      setApp(false);
      setFlow(false);
      setLayout(false);
      setComponent(false);
      setUlts(false);
    }
  }

  const showPage = () => {
    if (page === true) {
      setPage(false)
    } else {
      setPage(true);
      setBoard(false);
      setApp(false);
      setFlow(false);
      setLayout(false);
      setComponent(false);
      setUlts(false);
    }
  }

  const showApp = () => {
    if (app === true) {
      setApp(false)
    } else {
      setApp(true);
      setBoard(false);
      setPage(false);
      setFlow(false);
      setLayout(false);
      setComponent(false);
      setUlts(false);
    }
  }

  const showFlow = () => {
    if (flow === true) {
      setFlow(false)
    } else {
      setFlow(true);
      setBoard(false);
      setPage(false);
      setApp(false);
      setLayout(false);
      setComponent(false);
      setUlts(false);
    }
  }

  const showLayout = () => {
    if (layout === true) {
      setLayout(false)
    } else {
      setLayout(true);
      setBoard(false);
      setPage(false);
      setApp(false);
      setFlow(false);
      setComponent(false);
      setUlts(false);
    }
  }

  const showComponents = () => {
    if (component === true) {
      setComponent(false)
    } else {
      setComponent(true);
      setBoard(false);
      setPage(false);
      setApp(false);
      setFlow(false);
      setLayout(false);
      setUlts(false);
    }
  }

  const showUlts = () => {
    if (ults === true) {
      setUlts(false)
    } else {
      setUlts(true)
      setBoard(false);
      setPage(false);
      setApp(false);
      setFlow(false);
      setLayout(false);
      setComponent(false);
    }
  }

  return (
    <div className='DAT_Sidebar' id='sidebar'>

      <div className='DAT_Sidebar_Center'>
        {/* DashBoard */}
        <div className='DAT_Sidebar_Center_Tab'>
          <button className='DAT_Sidebar_Center_Tab_Content'
            onClick={() => { showBoard() }}>

            <NavLink to="/" style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#0061f2' : 'black',
              fontWeight: isActive ? 'bold' : 'normal',
            })}>
              <div className='DAT_Sidebar_Center_Tab_Content_Left'>
                <div className='DAT_Sidebar_Center_Tab_Content_Left_Icon'>
                  <FiActivity color="grey" size={18} />
                </div>
                <span style={{
                  color: board ? '#0061f2' : 'black',
                  fontWeight: board ? 'bold' : 'normal',
                }}> DashBoard </span>
              </div>
            </NavLink>
          </button>
        </div>
        {/* DROP DOWN 3 ITEM Nếu cần */}
        {/* {board && (<div className='DAT_Sidebar_Center_Collapse'>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <NavLink to="/dashboard/default" style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#0061f2' : 'black',
              fontWeight: isActive ? 'bold' : 'normal',
            })}>
              <span> Default </span>
            </NavLink>
            <div className='DAT_Sidebar_Center_Collapse_Tab_Status'>
              Updated
            </div>
          </div>

          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Multipurpose </span>
          </div>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Affiliate </span>
          </div>
        </div>)} */}

        {/* PAGES */}
        <div className='DAT_Sidebar_Center_Tab'>
          <button className='DAT_Sidebar_Center_Tab_Content'
            onClick={() => { showPage() }}>

            <div className='DAT_Sidebar_Center_Tab_Content_Left'>
              <div className='DAT_Sidebar_Center_Tab_Content_Left_Icon'>
                <CiGrid41 color="grey" size={18} />
              </div>
              <span style={{
                color: page ? '#0061f2' : 'black',
                fontWeight: page ? 'bold' : 'normal',
              }}>Pages</span>
            </div>

            <div className='DAT_Sidebar_Center_Tab_Content_Symbol' style={{
              transform: page ? "rotate(90deg)" : null, transition: '0.2s ease-in-out'
            }}>
              <MdKeyboardArrowRight color="grey" size={18} />
            </div>
          </button>
        </div>

        {page && (<div className='DAT_Sidebar_Center_Collapse'>
          <NavLink to="/pages/account" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#0061f2' : 'black',
            fontWeight: isActive ? 'bold' : 'normal',
          })}>
            <div className='DAT_Sidebar_Center_Collapse_Tab'>
              <span> Account </span>
            </div>
          </NavLink>

          <NavLink to="/pages/authenticate" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#0061f2' : 'black',
            fontWeight: isActive ? 'bold' : 'normal',
          })}>
            <div className='DAT_Sidebar_Center_Collapse_Tab'>
              <span> Authenticate </span>
            </div>
          </NavLink>

          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Error </span>
          </div>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Pricing </span>
          </div>
        </div>)}

        {/* Applications */}
        <div className='DAT_Sidebar_Center_Tab'>
          <button className='DAT_Sidebar_Center_Tab_Content'
            onClick={() => { showApp() }}>

            <div className='DAT_Sidebar_Center_Tab_Content_Left'>
              <div className='DAT_Sidebar_Center_Tab_Content_Left_Icon'>
                <CiGlobe color="grey" size={18} />
              </div>
              <span>Applications</span>
            </div>
            <div className='DAT_Sidebar_Center_Tab_Content_Symbol' style={{
              transform: app ? "rotate(90deg)" : null, transition: '0.2s ease-in-out'
            }}>
              <MdKeyboardArrowRight color="grey" size={18} />
            </div>
          </button>
        </div>

        {app && (<div className='DAT_Sidebar_Center_Collapse'>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Knowledge Base </span>
          </div>

          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> User Managements </span>
          </div>

          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Posts Managements </span>
          </div>
        </div>)}

        {/* Flows */}
        <div className='DAT_Sidebar_Center_Tab'>
          <button className='DAT_Sidebar_Center_Tab_Content'
            onClick={() => { showFlow() }}>

            <div className='DAT_Sidebar_Center_Tab_Content_Left'>
              <div className='DAT_Sidebar_Center_Tab_Content_Left_Icon'>
                <CiRepeat color="grey" size={18} />
              </div>
              <span>Flows</span>
            </div>
            <div className='DAT_Sidebar_Center_Tab_Content_Symbol' style={{
              transform: flow ? "rotate(90deg)" : null, transition: '0.2s ease-in-out'
            }}>
              <MdKeyboardArrowRight color="grey" size={18} />
            </div>
          </button>
        </div>

        {flow && (<div className='DAT_Sidebar_Center_Collapse'>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Multi-Tenant Registration </span>
          </div>

          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Wizard </span>
          </div>
        </div>)}

        {/* Layout */}
        <div className='DAT_Sidebar_Center_Tab'>
          <button className='DAT_Sidebar_Center_Tab_Content'
            onClick={() => { showLayout() }}>
            <div className='DAT_Sidebar_Center_Tab_Content_Left'>
              <div className='DAT_Sidebar_Center_Tab_Content_Left_Icon'>
                <FiLayout color="grey" size={18} />
              </div>
              <span>Layout</span>
            </div>
            <div className='DAT_Sidebar_Center_Tab_Content_Symbol' style={{
              transform: layout ? "rotate(90deg)" : null, transition: '0.2s ease-in-out'
            }}>
              <MdKeyboardArrowRight color="grey" size={18} />
            </div>
          </button>
        </div>

        {layout && (<div className='DAT_Sidebar_Center_Collapse'>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Container Options </span>
          </div>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Navigation </span>
          </div>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Starters Layout </span>
          </div>
        </div>)}

        {/* Components */}
        <div className='DAT_Sidebar_Center_Tab'>
          <button className='DAT_Sidebar_Center_Tab_Content'
            onClick={() => { showComponents() }}>

            <div className='DAT_Sidebar_Center_Tab_Content_Left'>
              <div className='DAT_Sidebar_Center_Tab_Content_Left_Icon'>
                <FiBox color="grey" size={18} />
              </div>
              <span>Components</span>
            </div>
            <div className='DAT_Sidebar_Center_Tab_Content_Symbol' style={{
              transform: component ? "rotate(90deg)" : null, transition: '0.2s ease-in-out'
            }}>
              <MdKeyboardArrowRight color="grey" size={18} />
            </div>

          </button>
        </div>

        {component && (<div className='DAT_Sidebar_Center_Collapse'>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Modals </span>
          </div>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Dropdowns </span>
          </div>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Timeline </span>
          </div>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Tooltips </span>
          </div>
        </div>)}

        {/* Ultilities */}
        <div className='DAT_Sidebar_Center_Tab'>
          <button className='DAT_Sidebar_Center_Tab_Content'
            onClick={() => { showUlts() }}>

            <div className='DAT_Sidebar_Center_Tab_Content_Left'>
              <div className='DAT_Sidebar_Center_Tab_Content_Left_Icon'>
                <FiTool color="grey" size={18} />
              </div>
              <span>Ultilities</span>
            </div>
            <div className='DAT_Sidebar_Center_Tab_Content_Symbol' style={{
              transform: ults ? "rotate(90deg)" : null, transition: '0.2s ease-in-out'
            }}>
              <MdKeyboardArrowRight color="grey" size={18} />
            </div>
          </button>
        </div>

        {ults && (<div className='DAT_Sidebar_Center_Collapse'>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Animation </span>
          </div>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Border </span>
          </div>
          <div className='DAT_Sidebar_Center_Collapse_Tab'>
            <span> Typography </span>
          </div>
        </div>)}

        {/* Charts */}
        <div className='DAT_Sidebar_Center_Tab'>
          <button className='DAT_Sidebar_Center_Tab_Content'>
            <div className='DAT_Sidebar_Center_Tab_Content_Left'>
              <div className='DAT_Sidebar_Center_Tab_Content_Left_Icon'>
                <LuBarChart color="grey" size={18} />
              </div>
              <span>Charts</span>
            </div>
            <div className='DAT_Sidebar_Center_Tab_Content_Symbol'>
              <MdKeyboardArrowRight color="grey" size={18} />
            </div>
          </button>
        </div>

        {/* Table */}
        <div className='DAT_Sidebar_Center_Tab'>
          <button className='DAT_Sidebar_Center_Tab_Content'>
            <div className='DAT_Sidebar_Center_Tab_Content_Left'>
              <div className='DAT_Sidebar_Center_Tab_Content_Left_Icon'>
                <CiFilter color="grey" size={18} />
              </div>
              <span>Table</span>
            </div>
            <div className='DAT_Sidebar_Center_Tab_Content_Symbol'>
              <MdKeyboardArrowRight color="grey" size={18} />
            </div>
          </button>
        </div>
      </div>

      <div className='DAT_Sidebar_Footer'>
        <div className='DAT_Sidebar_Footer_Container'>
          <div className='DAT_Sidebar_Footer_Container_Sub'>
            Logged in as:
          </div>
          <div className='DAT_Sidebar_Footer_Container_Title'>
            Phuoc Hung
          </div>
        </div>
      </div>
    </div>
  )
}


