import {useState,useEffect} from "react"
import {Toolbar,Typography,IconButton} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import {NavbarElement,BrandText,ToolBarCustom} from "./Navbar.style";
import Sidebar from "../SideBar/Sidebar";


const Navbar = () => {
    // for sidebar actions
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

const [lapotopSize, setLaptopSize] = useState(true);
const [windowSize, setWindowSize] = useState<{width:number} | null>(null)
// handleresize function
function handleResize() {
    // Set window width to state
    setWindowSize({
      width: window.innerWidth
    });
    // handle laptop size
    if(window.innerWidth<1124){
        setLaptopSize(false)
    }else{
        setLaptopSize(true);
    };
  }
// **** 
 // two way is making things depend of resize. First option is js, with evenListener+ useEffect, and second is with mediaQuery
 // Add RESIZE listener
// this event should be written in useEffect, cause it make rerender everytime, and ruined performance of app
//  window.addEventListener("resize", handleResize);


    useEffect(() => {

         // Call handler right away so state gets updated with initial window size
    handleResize();

     // Add RESIZE listener
 window.addEventListener("resize", handleResize);
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
      
    }, []);

   
    

    return (
        
        <NavbarElement  primary={lapotopSize}>
        <ToolBarCustom>
            {!lapotopSize && 
             <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon onClick={()=>setOpen(!open)} />
            </IconButton>  
            }
          <BrandText variant="h4">
            posao.hr
          </BrandText>
          <BrandText variant="h4">
            posao.hr
          </BrandText>
        </ToolBarCustom>
        <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>
      </NavbarElement>
        
    )
}

export default Navbar
