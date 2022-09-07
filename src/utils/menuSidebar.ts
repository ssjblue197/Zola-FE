import { faHouse, faPhone, faComment, faFolder, faGear } from "@fortawesome/free-solid-svg-icons";

export const MENU_SIDEBAR = [
    {
        icon: faHouse,
        name: 'DashBoard',
        title: 'DashBoard',
        url: '/home'
    },
    {
        icon: faPhone,
        name: 'Phone',
        title: 'Phone',
        url: '/call'
    },
    {
        icon: faComment,
        name: 'Messages',
        title: 'Messages',
        url: '/messages'
    },
    {
        icon: faFolder,
        name: 'Folder',
        title: 'Folder'
    },
    {
        icon: faGear,
        name: 'Settings',
        title: 'Settings'
    }
]