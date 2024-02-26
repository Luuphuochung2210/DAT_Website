import React from 'react';
import "./SideBar.scss"
import { FiActivity } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import { CiRepeat } from "react-icons/ci";
import { FiLayout } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { FiTool } from "react-icons/fi";
import { LuBarChart } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";

export default function Sidebar() {
  return (
    <div className='DAT_Sidebar' id='sidebar'>

      {/* DashBoard */}

      <div className='DAT_Sidebar_Tab'>
        <div className='DAT_Sidebar_Tab_Icon'>
          <FiActivity color="grey" size={16} />
        </div>
        DashBoard
        <div className='DAT_Sidebar_Tab_Arrow'>
          <MdKeyboardArrowRight color="grey" size={16} />
        </div>
      </div>

      {/* PAGES */}

      <div className='DAT_Sidebar_Tab'>
        <div className='DAT_Sidebar_Tab_Icon'>
          <CiGrid41 color="grey" size={16} />
        </div>
        Pages
        <div className='DAT_Sidebar_Tab_Arrow'>
          <MdKeyboardArrowRight color="grey" size={16} />
        </div>
      </div>

      {/* Applications */}

      <div className='DAT_Sidebar_Tab'>
        <div className='DAT_Sidebar_Tab_Icon'>
          <CiGlobe color="grey" size={16} />
        </div>
        Applications
        <div className='DAT_Sidebar_Tab_Arrow'>
          <MdKeyboardArrowRight color="grey" size={16} />
        </div>
      </div>

      {/* Flows */}

      <div className='DAT_Sidebar_Tab'>
        <div className='DAT_Sidebar_Tab_Icon'>
          <CiRepeat color="grey" size={16} />
        </div>
        Flows
        <div className='DAT_Sidebar_Tab_Arrow'>
          <MdKeyboardArrowRight color="grey" size={16} />
        </div>
      </div>

      {/* Layout */}

      <div className='DAT_Sidebar_Tab'>
        <div className='DAT_Sidebar_Tab_Icon'>
          <FiLayout color="grey" size={16} />
        </div>
        Layout
        <div className='DAT_Sidebar_Tab_Arrow'>
          <MdKeyboardArrowRight color="grey" size={16} />
        </div>
      </div>

      {/* Components */}

      <div className='DAT_Sidebar_Tab'>
        <div className='DAT_Sidebar_Tab_Icon'>
          <BsBoxSeam color="grey" size={16} />
        </div>
        Components
        <div className='DAT_Sidebar_Tab_Arrow'>
          <MdKeyboardArrowRight color="grey" size={16} />
        </div>
      </div>

      {/* Ultilities */}

      <div className='DAT_Sidebar_Tab'>
        <div className='DAT_Sidebar_Tab_Icon'>
          <FiTool color="grey" size={16} />
        </div>
        Ultilities
        <div className='DAT_Sidebar_Tab_Arrow'>
          <MdKeyboardArrowRight color="grey" size={16} />
        </div>
      </div>

      {/* Charts */}

      <div className='DAT_Sidebar_Tab'>
        <div className='DAT_Sidebar_Tab_Icon'>
          <LuBarChart color="grey" size={16} />
        </div>
        Charts
        <div className='DAT_Sidebar_Tab_Arrow'>
          <MdKeyboardArrowRight color="grey" size={16} />
        </div>
      </div>

      {/* Table */}

      <div className='DAT_Sidebar_Tab'>
        <div className='DAT_Sidebar_Tab_Icon'>
          <CiFilter color="grey" size={16} />
        </div>
        Table
        <div className='DAT_Sidebar_Tab_Arrow'>
          <MdKeyboardArrowRight color="grey" size={16} />
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


