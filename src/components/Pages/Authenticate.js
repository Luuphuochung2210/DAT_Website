import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import "../DashBoard.scss"
import { FiActivity } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { FiLayout } from "react-icons/fi";
import { PiDotsThreeVertical } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";

function Authenticate() {
    return (
        <div className="DAT_DashBoard">
            <div className="DAT_DashBoard_Banner">
            </div>
            <div className="DAT_DashBoard_Content">
                {/* HEADER */}
                <div className="DAT_DashBoard_Content_Head">
                    <div className="DAT_DashBoard_Content_Head_Title">
                        <FiActivity color="rgba(255, 255, 255, 0.5)" size={28} />
                        <span>AUTHENTICATE</span>
                    </div>
                    <div className="DAT_DashBoard_Content_Head_Desc">Example dashboard overview and content summary</div>
                </div>

                {/* 3 CARDS */}
                <div className="DAT_DashBoard_Data">
                    <div className="DAT_DashBoard_Data_Data1">
                        <div className="DAT_DashBoard_Data_Data1_Card">
                            <div className="DAT_DashBoard_Data_Data1_Card_Container">
                                <BsBoxSeam size={35} color="blue" />
                                <div className="DAT_DashBoard_Data_Data1_Card_Container_Info">
                                    <span> Power Components</span>
                                    <div className="DAT_DashBoard_Data_Data1_Card_Container_Desc">Example dashboard overview and content summary</div>
                                </div>
                            </div>
                            <img src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/browser-stats.svg" alt="" />
                        </div>
                    </div>

                    <div className="DAT_DashBoard_Data_Data1">
                        <div className="DAT_DashBoard_Data_Data1_Card">
                            <div className="DAT_DashBoard_Data_Data1_Card_Container">
                                <FiBook size={35} color="purple" />
                                <div className="DAT_DashBoard_Data_Data1_Card_Container_Info">
                                    <span> Documentation</span>
                                    <div className="DAT_DashBoard_Data_Data1_Card_Container_Desc">To create informative visual elements on your pages</div>
                                </div>
                            </div>
                            <img src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/processing.svg" alt="" />
                        </div>
                    </div>

                    <div className="DAT_DashBoard_Data_Data1">
                        <div className="DAT_DashBoard_Data_Data1_Card">
                            <div className="DAT_DashBoard_Data_Data1_Card_Container">
                                <FiLayout size={35} color="green" />
                                <div className="DAT_DashBoard_Data_Data1_Card_Container_Info">
                                    <span> Pages & Layouts</span>
                                    <div className="DAT_DashBoard_Data_Data1_Card_Container_Desc">To help get you started when building your new UI</div>
                                </div>
                            </div>
                            <img src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/windows.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className='DAT_DashBoard_Main'>
                    <div className="DAT_DashBoard_Left">
                        {/* CHARTS */}
                        <div className="DAT_DashBoard_Left_Chart">
                            <div className="DAT_DashBoard_Left_Chart_Card">
                                <div className="DAT_DashBoard_Left_Chart_Card_Header">
                                    <span>Overviews</span>
                                </div>
                            </div>
                        </div>

                        {/* GET STARTED */}
                        <div className="DAT_DashBoard_Left_Started">
                            <div className="DAT_DashBoard_Left_Started_Card">
                                <img src='https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/data-report.svg' height={160} alt='' />
                                <div className="DAT_DashBoard_Left_Started_Card_Data">
                                    <div className='DAT_DashBoard_Left_Started_Card_Data_Text'>
                                        New reports are here! Generate custom reports now!
                                    </div>
                                    <span>Our new report generation system is now online. You can start creating custom reporting for any documents available on your account.</span>
                                </div>
                                <button> Get Started </button>
                            </div>
                        </div>

                        <div className='DAT_DashBoard_Left_Bot'>
                            {/* RECENT ACTIVITY */}
                            <div className="DAT_DashBoard_Left_Bot_Recent">
                                <div className="DAT_DashBoard_Left_Bot_Recent_Card">
                                    <div className="DAT_DashBoard_Left_Bot_Recent_Card_Header">
                                        <div className='DAT_DashBoard_Left_Bot_Recent_Card_Header_Text'>
                                            Recent Activity
                                        </div>
                                        <button className='DAT_DashBoard_Left_Bot_Recent_Card_Header_Dot'>
                                            <PiDotsThreeVertical />
                                        </button>
                                    </div>
                                    <div className="DAT_DashBoard_Left_Bot_Recent_Card_Body">
                                        {/* ITEM 1 */}
                                        <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item'>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time'>
                                                <small>27 min</small>
                                                <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time_Marker'>
                                                </div>
                                            </div>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Content'>
                                                New order placed! <a href='#!'>Order #2912</a>  has been successfully placed.
                                            </div>
                                        </div>

                                        {/* ITEM 2 */}
                                        <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item'>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time'>
                                                <small>58 min</small>
                                                <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time_MarkerB'>
                                                </div>
                                            </div>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Content'>
                                                Your<a href='#!'> weekly report</a> has been generated and is ready to view.
                                            </div>
                                        </div>

                                        {/* ITEM 3*/}
                                        <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item'>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time'>
                                                <small>2hrs</small>
                                                <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time_MarkerP'>
                                                </div>
                                            </div>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Content'>
                                                New user <a href='#!'>Valerie Luna </a>  has registered
                                            </div>
                                        </div>

                                        {/* ITEM 4 */}
                                        <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item'>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time'>
                                                <small>1 day</small>
                                                <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time_MarkerO'>
                                                </div>
                                            </div>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Content'>
                                                Server activity monitor alert
                                            </div>
                                        </div>

                                        {/* ITEM 5 */}
                                        <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item'>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time'>
                                                <small>1 day</small>
                                                <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time_Marker'>
                                                </div>
                                            </div>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Content'>
                                                New order placed! <a href='#!'>Order #3333</a>  has been successfully placed.
                                            </div>
                                        </div>

                                        {/* ITEM 6 */}
                                        <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item'>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time'>
                                                <small>1 day</small>
                                                <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time_MarkerP'>
                                                </div>
                                            </div>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Content'>
                                                Details for <a href='#!'>Marketing and Planning Meeting</a> have been updated.
                                            </div>
                                        </div>

                                        {/* ITEM 7 */}
                                        <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item'>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time'>
                                                <small>2 days</small>
                                                <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_Time_Marker'>
                                                </div>
                                            </div>
                                            <div className='DAT_DashBoard_Left_Bot_Recent_Card_Body_Item_ContentZ'>
                                                New order placed! <a href='#!'>Order #2110</a> has been successfully placed.
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* TRAFFIC SOURCES */}
                            <div className="DAT_DashBoard_Left_Bot_Traffic">
                                <div className="DAT_DashBoard_Left_Bot_Traffic_Card">
                                    <div className="DAT_DashBoard_Left_Bot_Traffic_Card_Header">
                                        <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Header_Text'>
                                            Traffic Resources
                                        </div>
                                    </div>
                                    <div className="DAT_DashBoard_Left_Bot_Traffic_Card_Body">
                                        <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Graph'>

                                        </div>
                                        <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Content'>
                                            <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Content_Data'>
                                                <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Content_Data_Info'>
                                                    <FaCircle color='#0061f2' size={12} />
                                                    <span> Direct</span>
                                                </div>
                                                <small>%</small>
                                            </div>

                                            <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Content_Data'>
                                                <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Content_Data_Info'>
                                                    <FaCircle color='rgb(189, 34, 189)' size={12} />
                                                    <span> Social </span>
                                                </div>
                                                <small>15%</small>
                                            </div>

                                            <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Content_DataZ'>
                                                <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Content_Data_Info'>
                                                    <FaCircle color='rgb(26, 207, 65)' size={12} />
                                                    <span>  Referral
                                                    </span>
                                                </div>
                                                <small>30%</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Authenticate;