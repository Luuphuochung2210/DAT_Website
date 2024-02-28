import React, { useEffect, useRef, useState } from "react";
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
import { IoIosLogOut } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { RiCodeFill } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Head() {
    const [docs, setDocs] = useState(false);
    const [alert, setAlert] = useState(false);
    const [mail, setMail] = useState(false);
    const [ava, setAva] = useState(false);

    const dropdownRef = useRef();

    // Handle Open/Close Sidebar 
    const handleMenu = (e) => {
        const sideBar = document.getElementById('sidebar')

        if (sideBar.style.width === '240px') {
            sideBar.style.width = '0px';
        } else {
            sideBar.style.width = '240px';
        }
        sideBar.style.transition = '0.25s ease-in-out'
    }

    //Handle Document DropDown
    const handleDocs = () => {
        if (docs === true) {
            setDocs(false);
        } else {
            setDocs(true);
            setAlert(false);
            setMail(false);
            setAva(false);
        }
    }

    // Handle Dropdown Alert
    const handleAlert = () => {
        if (mail === true) {
            setAlert(false);
        } else {
            setAlert(true);
            setDocs(false);
            setMail(false);
            setAva(false);
        }
    }

    // Handle Dropdown Mail
    const handleMail = () => {
        if (mail === true) {
            setMail(false);
        } else {
            setMail(true);
            setDocs(false);
            setAlert(false);
            setAva(false);
        }
    }

    // Handle Dropdown Avatar
    const handleAva = () => {
        if (ava === true) {
            setAva(false);
        } else {
            setAva(true);
            setDocs(false);
            setAlert(false);
            setMail(false);
        }
    }

    //Close all dropdown
    const closeAllDropdowns = () => {
        setDocs(false);
        setAlert(false);
        setMail(false);
        setAva(false);
    };

    // Handle Click Outside to close DropDown Table
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                closeAllDropdowns();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="DAT_Head">
            <button className="DAT_Head_Left" onClick={() => { handleMenu() }}>
                <MdOutlineMenu size={18} color="grey" />
            </button>

            <div className="DAT_Head_Logo">
                DAT GROUP
            </div>
            <div className="DAT_Head_Center">
                <div className="DAT_Head_Center_Search">
                    <input placeholder="Search.."
                    ></input>
                    <IoSearchOutline color="grey" size={20} />
                </div>
            </div>

            <button className="DAT_Head_Doc" onClick={() => { handleDocs() }}>
                Documentation
                <div style={{
                    transform: docs ? "rotate(90deg)" : null, transition: '0.2s ease-in-out'
                }}>
                    <MdKeyboardArrowRight
                        color="grey"
                        size={18}
                    />
                </div>
            </button>

            <button className="DAT_Head_Right" onClick={() => (handleAlert())}>
                <IoIosNotificationsOutline color="grey" size={18} />
            </button>

            <button className="DAT_Head_Right" onClick={() => { handleMail() }} >
                <CiMail color="grey" size={18} />
            </button>

            <button className="DAT_Head_Ava" onClick={() => { handleAva() }} >
                <img
                    src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-2.png" alt="">
                </img>
            </button>

            {/* DROPDOWN DOCUMENTATION */}
            {docs && (<div className="DAT_Head_Docs" ref={dropdownRef} >
                <div className="DAT_Head_Docs_Card">
                    <a href="#!" className="DAT_Head_Docs_Card_Body">
                        <div className='DAT_Head_Docs_Card_Body_Icon'>
                            <FiBook color="blue" size={18} />
                        </div>
                        <div className='DAT_Head_Docs_Card_Body_Text'>
                            <small> Documentation </small>
                            <div className='DAT_Head_Docs_Card_Body_Text_Mes'>
                                Usage instructions and reference
                            </div>
                        </div>
                    </a>
                    <div className="DAT_Head_Docs_Card_Divider"></div>
                    <a href="#!" className="DAT_Head_Docs_Card_Body">
                        <div className='DAT_Head_Docs_Card_Body_Icon'>
                            <RiCodeFill color="blue" size={18} />
                        </div>
                        <div className='DAT_Head_Docs_Card_Body_Text'>
                            <small> Components </small>
                            <div className='DAT_Head_Docs_Card_Body_Text_Mes'>
                                Code snippets and reference
                            </div>
                        </div>
                    </a>
                    <div className="DAT_Head_Docs_Card_Divider"></div>
                    <a href="#!" className="DAT_Head_Docs_Card_Body">
                        <div className='DAT_Head_Docs_Card_Body_Icon'>
                            <IoDocumentTextOutline color="blue" size={18} />
                        </div>
                        <div className='DAT_Head_Docs_Card_Body_Text'>
                            <small> Changelog </small>
                            <div className='DAT_Head_Docs_Card_Body_Text_Mes'>
                                Updates and Changes
                            </div>
                        </div>
                    </a>
                </div>
            </div>)}


            {/* NOTIFICATION DROPDOWN */}
            {alert && (<div className="DAT_Head_Notification" ref={dropdownRef}>
                <div className="DAT_Head_Notification_Card">
                    <div className="DAT_Head_Notification_Card_Head">
                        <IoIosNotificationsOutline color="white" size={18} />
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
            </div>)}

            {/* MAIL DROPDOWN */}
            {mail && (<div className="DAT_Head_Mail" id="mail" ref={dropdownRef} >
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
            </div >)}

            {/* AVATAR DROPDOWN */}
            {ava && (<div className="DAT_Head_DropAva" ref={dropdownRef}>
                <div className="DAT_Head_DropAva_Card">
                    <div className="DAT_Head_DropAva_Card_Head">
                        <div className='DAT_Head_DropAva_Card_Head_Icon'>
                            <img src="https://sb-admin-pro.startbootstrap.com/assets/img/illustrations/profiles/profile-2.png" alt='' />
                        </div>
                        <div className="DAT_Head_DropAva_Card_Name">
                            <span> Valarie Luna </span>
                            <small> vluna@aol.com </small>
                        </div>
                    </div>

                    <div className="DAT_Head_DropAva_Card_Divider"></div>

                    <div className="DAT_Head_DropAva_Card_Body">
                        <div className='DAT_Head_DropAva_Card_Body_Item'>
                            <CiSettings size={18} color="black" />
                            <span>&nbsp;Account </span>
                        </div>

                        <div className='DAT_Head_DropAva_Card_Body_Item'>
                            <IoIosLogOut size={18} color="black" />
                            <span>&nbsp;Logout </span>
                        </div>
                    </div>
                </div>
            </div >)}

        </div >

    )
}