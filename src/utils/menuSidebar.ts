import { faHouse, faUsers,  faPhone, faComment, faFolder, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

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
        icon: faUsers,
        name: 'Contact',
        title: 'Contact',
    },
    {
        icon: faFolder,
        name: 'Folder',
        title: 'Folder'
    },
    {
        icon: null,
        name: 'Space',
        title: 'Space'
    },
    {
        icon: faGear,
        name: 'Settings',
        title: 'Settings'
    },
    {
        icon: faRightFromBracket,
        name: 'Logout',
        title: 'Logout',
        url: '/logout'
    }
]