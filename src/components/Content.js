import React from "react";
import { AiOutlineProject } from "react-icons/ai";

export const SideBarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiOutlineProject />,
        subNav: [
            {
                title: 'Default',
                path: '/dashboard/default',
            },
            {
                title: 'Multipurpose',
                path: '/dashboard/multipurpose',
            },
            {
                title: 'Affiliate',
                path: '/dashboard/affiliate',
            },
        ]
    }
]
