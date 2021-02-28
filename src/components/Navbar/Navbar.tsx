import {useState,useEffect} from "react"
import {Typography,IconButton,Tab} from '@material-ui/core/';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {NavbarElement,BrandText,ToolBarCustom,CustomTabs,CustomIconButton} from "./Navbar.style";
import Sidebar from "../SideBar/Sidebar";
import Avatars from "./Avatars";


// MATERIAL UI STYLE + CUSTOM STYLED COMPONENTS
interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  flexContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
 
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#238af1',
    },
  },
})((props: StyledTabsProps) => <CustomTabs {...props} TabIndicatorProps={{ children: <span /> }} />);

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: 'black',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(16),
      marginRight: theme.spacing(1),
      
      '&:focus': {
        opacity: 1,
        color: '#238af1',
        backgroundColor:'#dfdfdf',
        height:'60px'
      },
      '&:hover':{
        color: '#238af1'
      }
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);





const Navbar = () => {
    // for sidebar actions
    const [open, setOpen] = useState(false);

   
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const [tab, setTab] = useState(0);

    const handleChange=(e: React.ChangeEvent<{}>, newValue: number)=>{
      setTab(newValue);
    }

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
         
             <CustomIconButton edge="start"  color="inherit" aria-label="menu" onClick={()=>setOpen(!open)}>
            <MenuIcon  />
            </CustomIconButton>  
           
          <BrandText variant="h4">
            posao.hr
          </BrandText>
          <StyledTabs
        value={tab}
        onChange={handleChange}
       
      >
        <StyledTab label="Item One" />
        <StyledTab label="Item Two" />
        <StyledTab label="Item Three" />
      </StyledTabs>

         <Avatars/>

        </ToolBarCustom>
        <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>
      </NavbarElement>
        
    )
}

export default Navbar
