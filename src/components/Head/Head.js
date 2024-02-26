import React, { useState } from "react";
import "./Head.scss"
import { MdOutlineMenu } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { FiBarChart } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";

export default function Head() {
    const handleMenu = (e) => {
        const sideBar = document.getElementById('sidebar')

        if (sideBar.style.width === '240px') {
            sideBar.style.width = '0px';
        } else {
            sideBar.style.width = '240px';
        }

        // Cach 2
        // if (sideBar.style.display === 'none') {
        //     sideBar.style.display = 'block'
        // } else {
        //     sideBar.style.display = 'none'
        // }

        sideBar.style.transition = '0.4s ease-in-out'
    }


    const [alert, setAlert] = useState(false);

    const handleAlert = () => {
        if (alert === true) {
            setAlert(false)
        } else {
            setAlert(true)
        }
    }

    const handleMail = (e) => {
        const mail = document.getElementById('mail');

        if (mail.style.display === 'none') {
            mail.style.display = 'block';
        } else {
            mail.style.display = 'none';
        }
    }

    return (
        <div className="DAT_Head">
            <button className="DAT_Head_Left" onClick={() => { handleMenu() }}>
                <MdOutlineMenu size={16} color="grey" />
            </button>

            <div className="DAT_Head_Logo">
                DAT GROUP
            </div>

            {/* <span>HEllo</span> */}
            <div className="DAT_Head_Center">
                <div className="DAT_Head_Center_Search">
                    <input placeholder="Search.."></input>
                    <IoSearchOutline color="grey" size={20} />
                </div>
            </div>

            <button className="DAT_Head_Doc">
                Documentation <MdKeyboardArrowRight color="grey" size={16} />
            </button>

            <button className="DAT_Head_Right" onClick={() => { handleAlert() }}>
                <IoIosNotificationsOutline color="grey" size={16} />
            </button>

            <button className="DAT_Head_Right" onClick={() => { handleMail() }}>
                <CiMail color="grey" size={16} />
            </button>

            <button className="DAT_Head_Ava">
                <img
                    src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-1.png" alt="">
                </img>
            </button>

            {/* NOTIFICATION SECTION */}
            {alert ? (<div className="DAT_Head_Notification">
                <div className="DAT_Head_Notification_Card">
                    <div className="DAT_Head_Notification_Card_Head">
                        <IoIosNotificationsOutline color="white" size={16} />
                        <span> &nbsp;Alerts Center </span>
                    </div>
                    <a href="#!" className="DAT_Head_Notification_Card_Body">
                        <div className='DAT_Head_Notification_Card_Body_Icon'>
                            <FiActivity color="white" size={18} />
                        </div>
                        <div className='DAT_Head_Notification_Card_Body_Text'>
                            <small>December 29, 2021</small>
                            <div className='DAT_Head_Notification_Card_Body_Text_Mes'>
                                This is an alert message. It's nothing serious,
                                but it requires your attention.
                            </div>
                        </div>
                    </a>

                    <a href="#!" className="DAT_Head_Notification_Card_Body">
                        <div className='DAT_Head_Notification_Card_Body_IconB'>
                            <FiBarChart color="white" size={18} />
                        </div>
                        <div className='DAT_Head_Notification_Card_Body_Text'>
                            <small>December 22, 2021</small>
                            <div className='DAT_Head_Notification_Card_Body_Text_Mes'>
                                A new monthly report is ready. Click here to view!
                            </div>
                        </div>
                    </a>

                    <a href="#!" className="DAT_Head_Notification_Card_Body">
                        <div className='DAT_Head_Notification_Card_Body_IconR'>
                            <MdErrorOutline color="white" size={18} />
                        </div>
                        <div className='DAT_Head_Notification_Card_Body_Text'>
                            <small>December 8, 2021</small>
                            <div className='DAT_Head_Notification_Card_Body_Text_Mes'>
                                Critical system failure, systems shutting down.
                            </div>
                        </div>
                    </a>

                    <a href="#!" className="DAT_Head_Notification_Card_Body">
                        <div className='DAT_Head_Notification_Card_Body_IconG'>
                            <IoIosPersonAdd color="white" size={18} />
                        </div>
                        <div className='DAT_Head_Notification_Card_Body_Text'>
                            <small>December 2, 2021</small>
                            <div className='DAT_Head_Notification_Card_Body_Text_Mes'>
                                New user request. Woody has requested access to the organization.
                            </div>
                        </div>
                    </a>

                    <a href="#!" className="DAT_Head_Notification_Card_All">
                        <span> View All Alerts </span>
                    </a>
                </div>
            </div>) :
                (<></>)}

            {/* MAIL SECTION */}
            <div className="DAT_Head_Mail" id="mail" >
                <div className="DAT_Head_Mail_Card">
                    <div className="DAT_Head_Mail_Card_Head">
                        <CiMail color="white" size={18} />
                        <span>&nbsp; Mail Center </span>
                    </div>
                    <a href="#!" className="DAT_Head_Mail_Card_Body">
                        <div className='DAT_Head_Mail_Card_Body_Icon'>
                            <img src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-2.png" alt='' />
                        </div>
                        <div className='DAT_Head_Mail_Card_Body_Text'>
                            <div className='DAT_Head_Mail_Card_Body_Text_Mes'>
                                This is an alert message. It's nothing serious,
                                but it requires your attention.
                            </div>
                            <small>Emily Fowler · 2d</small>
                        </div>
                    </a>

                    <a href="#!" className="DAT_Head_Mail_Card_Body">
                        <div className='DAT_Head_Mail_Card_Body_Icon'>
                            <img src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-3.png" alt='' />
                        </div>
                        <div className='DAT_Head_Mail_Card_Body_Text'>
                            <div className='DAT_Head_Mail_Card_Body_Text_Mes'>
                                A new monthly report is ready. Click here to view!
                            </div>
                            <small>Thomas Wilcox · 23m</small>
                        </div>
                    </a>

                    <a href="#!" className="DAT_Head_Mail_Card_Body">
                        <div className='DAT_Head_Mail_Card_Body_Icon'>
                            <img src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-4.png" alt='' />
                        </div>
                        <div className='DAT_Head_Mail_Card_Body_Text'>
                            <div className='DAT_Head_Mail_Card_Body_Text_Mes'>
                                Critical system failure, systems shutting down.
                            </div>
                            <small>Marshall Rosencrantz · 13d</small>
                        </div>
                    </a>

                    <a href="#!" className="DAT_Head_Mail_Card_Body">
                        <div className='DAT_Head_Mail_Card_Body_Icon'>
                            <img src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-5.png" alt='' />
                        </div>
                        <div className='DAT_Head_Mail_Card_Body_Text'>
                            <div className='DAT_Head_Mail_Card_Body_Text_Mes'>
                                New user request. Woody has requested access to the organization.
                            </div>
                            <small>Colby Newton · 12m</small>
                        </div>
                    </a>

                    <a href="#!" className="DAT_Head_Mail_Card_All">
                        <span> Read All Messages </span>
                    </a>
                </div>
            </div >
        </div >

    )
}