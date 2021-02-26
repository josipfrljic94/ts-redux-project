import React from 'react';
import {SideBarElement} from './SideBar.style';
interface SideBarProps{
    open:boolean
    handleDrawerClose:()=>void;
}
const Sidebar:React.FC<SideBarProps> = ({open,handleDrawerClose}) => {
   
    return (
        <SideBarElement
       anchor="left"
        open={open}
        onClose={handleDrawerClose}
       
        >

        </SideBarElement>
           
       
    )
}

export default Sidebar
