import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import "./DashBoard.scss"
import { FiActivity } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { FiLayout } from "react-icons/fi";
import { PiDotsThreeVertical } from "react-icons/pi";
import { FaCircle } from "react-icons/fa";


const data = [
    {
        name: 'Jan',
        Earnings: 10000,
    },
    {
        name: '',
        Earnings: 20000,
    },
    {
        name: 'Mar',
        Earnings: 15000,
    },
    {
        name: '',
        Earnings: 28000,
    },
    {
        name: 'May',
        Earnings: 25000,
    },
    {
        name: '',
        Earnings: 35000,
    },
    {
        name: 'Jul',
        Earnings: 30000,
    },
    {
        name: '',
        Earnings: 45000,
    },
    {
        name: 'Sep',
        Earnings: 40000,
    }, {
        name: '',
        Earnings: 50000,
    }, {
        name: 'Nov',
        Earnings: 44000,
    },
    {
        name: '',
        Earnings: 60000,
    },
];

const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function DashBoard() {
    const [test, setTest] = useState(13)

    const [title, setTitle] = useState('Giám sát')

    // function handleClick2(e) {
    //     console.log('Hello')
    //     setTest(test + 1);
    // }
    const handleClick2 = (e) => {
        console.log('Hello')
        setTest(test + 1);
    }

    return (
        <div className="DAT_DashBoard">
            <div className="DAT_DashBoard_Banner">
            </div>
            <div className="DAT_DashBoard_Content">
                {/* HEADER */}
                <div className="DAT_DashBoard_Content_Head">
                    <div className="DAT_DashBoard_Content_Head_Title">
                        <FiActivity color="rgba(255, 255, 255, 0.5)" size={28} />
                        <span>{title}</span>
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
                                <div className="DAT_DashBoard_Left_Chart_Card_Data">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart
                                            width={500}
                                            height={400}
                                            data={data}
                                            margin={{
                                                top: 50,
                                                right: 40,
                                                left: 20,
                                                bottom: 20,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                            <YAxis unit='$' axisLine={false} tickLine={false} />
                                            <Tooltip />
                                            <Area type="monotone" dataKey="Earnings" stroke="#0061f2" strokeWidth={2.5} fill="#dae7fb " unit='$' dot={{ stroke: '#0061f2  ', strokeWidth: 8, r: 2, strokeDasharray: '' }} />
                                        </AreaChart>
                                    </ResponsiveContainer>
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
                                            <ResponsiveContainer width="100%" height="100%">
                                                <PieChart width={200} height={200} >
                                                    <Pie
                                                        data={data2}
                                                        innerRadius={60}
                                                        outerRadius={80}
                                                        fill="#8884d8"
                                                        paddingAngle={5}
                                                        dataKey="value"
                                                    >
                                                        {data.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                        ))}
                                                    </Pie>
                                                </PieChart>
                                            </ResponsiveContainer>
                                        </div>
                                        <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Content'>
                                            <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Content_Data'>
                                                <div className='DAT_DashBoard_Left_Bot_Traffic_Card_Body_Content_Data_Info'>
                                                    <FaCircle color='#0061f2' size={12} />
                                                    <span> Direct</span>
                                                </div>
                                                <small>{test}%</small>
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

                    {/* RIGHT AREA */}
                    <div className="DAT_DashBoard_Right">
                        {/* PEOPLE */}
                        <div className="DAT_DashBoard_Right_People">
                            <div className="DAT_DashBoard_Right_People_Card">
                                <div className="DAT_DashBoard_Right_People_Card_Header">
                                    <span> People </span>
                                </div>
                                <div className="DAT_DashBoard_Right_People_Card_Data">
                                    <div className="DAT_DashBoard_Right_People_Card_Data_Item">
                                        <div className='DAT_DashBoard_Right_People_Card_Data_Item_Item1'>
                                            <img src='https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-1.png' alt='' width={48} />
                                            <div className="DAT_DashBoard_Right_People_Card_Data_Item_Item1_Name">
                                                Sid Rooney
                                                <span>Position</span>
                                            </div>
                                        </div>
                                        <button className='DAT_DashBoard_Right_People_Card_Data_Item_Dot'>
                                            <PiDotsThreeVertical />
                                        </button>
                                    </div>

                                    <div className="DAT_DashBoard_Right_People_Card_Data_Item">
                                        <div className='DAT_DashBoard_Right_People_Card_Data_Item_Item1'>
                                            <img src='https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-2.png' alt='' width={48} />
                                            <div className="DAT_DashBoard_Right_People_Card_Data_Item_Item1_Name">
                                                Keelan Garza
                                                <span>Position</span>
                                            </div>
                                        </div>
                                        <button className='DAT_DashBoard_Right_People_Card_Data_Item_Dot'>
                                            <PiDotsThreeVertical />
                                        </button>
                                    </div>

                                    <div className="DAT_DashBoard_Right_People_Card_Data_Item">
                                        <div className='DAT_DashBoard_Right_People_Card_Data_Item_Item1'>
                                            <img src='https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-3.png' alt='' width={48} />
                                            <div className="DAT_DashBoard_Right_People_Card_Data_Item_Item1_Name">
                                                Kaia Smyth
                                                <span>Position</span>
                                            </div>
                                        </div>
                                        <button className='DAT_DashBoard_Right_People_Card_Data_Item_Dot'>
                                            <PiDotsThreeVertical />
                                        </button>
                                    </div>

                                    <div className="DAT_DashBoard_Right_People_Card_Data_Item">
                                        <div className='DAT_DashBoard_Right_People_Card_Data_Item_Item1'>
                                            <img src='https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-4.png' alt='' width={48} />
                                            <div className="DAT_DashBoard_Right_People_Card_Data_Item_Item1_Name">
                                                Kerri Kearney
                                                <span>Position</span>
                                            </div>
                                        </div>
                                        <button className='DAT_DashBoard_Right_People_Card_Data_Item_Dot'>
                                            <PiDotsThreeVertical />
                                        </button>
                                    </div>

                                    <div className="DAT_DashBoard_Right_People_Card_Data_Item">
                                        <div className='DAT_DashBoard_Right_People_Card_Data_Item_Item1'>
                                            <img src='https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-5.png' alt='' width={48} />
                                            <div className="DAT_DashBoard_Right_People_Card_Data_Item_Item1_Name">
                                                George Findlay
                                                <span>Position</span>
                                            </div>
                                        </div>
                                        <button className='DAT_DashBoard_Right_People_Card_Data_Item_Dot'>
                                            <PiDotsThreeVertical />
                                        </button>
                                    </div>

                                    <div className="DAT_DashBoard_Right_People_Card_Data_Item">
                                        <div className='DAT_DashBoard_Right_People_Card_Data_Item_Item1'>
                                            <img src='https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-6.png' alt='' width={48} />
                                            <div className="DAT_DashBoard_Right_People_Card_Data_Item_Item1_Name">
                                                Wilf Ingram
                                                <span>Position</span>
                                            </div>
                                        </div>
                                        <button className='DAT_DashBoard_Right_People_Card_Data_Item_Dot'>
                                            <PiDotsThreeVertical />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="DAT_DashBoard_Right_Project">
                            <div className="DAT_DashBoard_Right_Project_Card">
                                <div className="DAT_DashBoard_Right_Project_Card_Header">
                                    <span> Projects </span>
                                    <button className='DAT_DashBoard_Right_Project_Card_Header_Add'>
                                        Create New
                                    </button>
                                </div>

                                <div className="DAT_DashBoard_Right_Project_Card_Item">
                                    <div className="DAT_DashBoard_Right_Project_Card_Item_Data">
                                        <span>Server Setup</span>
                                        <small>25%</small>
                                    </div>
                                    <div className="DAT_DashBoard_Right_Project_Card_Item_Progress">
                                        <div className="DAT_DashBoard_Right_Project_Card_Item_Progress_Color_Red">
                                        </div>
                                    </div>
                                </div>

                                <div className="DAT_DashBoard_Right_Project_Card_Item">
                                    <div className="DAT_DashBoard_Right_Project_Card_Item_Data">
                                        <span>Database Migration
                                        </span>
                                        <small>50%</small>
                                    </div>
                                    <div className="DAT_DashBoard_Right_Project_Card_Item_Progress">
                                        <div className="DAT_DashBoard_Right_Project_Card_Item_Progress_Color_Yellow">
                                        </div>
                                    </div>
                                </div>

                                <div className="DAT_DashBoard_Right_Project_Card_Item">
                                    <div className="DAT_DashBoard_Right_Project_Card_Item_Data">
                                        <span>Version Release</span>
                                        <small>75%</small>
                                    </div>
                                    <div className="DAT_DashBoard_Right_Project_Card_Item_Progress">
                                        <div className="DAT_DashBoard_Right_Project_Card_Item_Progress_Color_Blue">
                                        </div>
                                    </div>
                                </div>

                                <div className="DAT_DashBoard_Right_Project_Card_Item">
                                    <div className="DAT_DashBoard_Right_Project_Card_Item_Data">
                                        <span>Product Listings</span>
                                        <small>100%</small>
                                    </div>
                                    <div className="DAT_DashBoard_Right_Project_Card_Item_Progress">
                                        <div className="DAT_DashBoard_Right_Project_Card_Item_Progress_Color_Green">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="DAT_DashBoard_Right_Upgrade">
                            <div className="DAT_DashBoard_Right_Upgrade_Card">
                                <img src='https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/team-spirit.svg' height={200} alt='' />
                                <div className="DAT_DashBoard_Right_Upgrade_Card_Data">
                                    <div className='DAT_DashBoard_Right_Upgrade_Card_Data_Text'>
                                        Team Access
                                    </div>
                                    <span>Upgrade your plan to get access to team collaboration tools.</span>
                                </div>
                                {/* <button onClick={() => { setTest(test + 1) }}> Upgrade </button> */}
                                <button onClick={() => { handleClick2() }}> Upgrade </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
