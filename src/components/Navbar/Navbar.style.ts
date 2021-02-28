import styled from 'styled-components';
import {mediaQueries} from "../../MediaQuery.config";
import {AppBar,Toolbar,Typography,IconButton,Tabs,Container,Avatar} from '@material-ui/core/';


export const NavbarElement = styled(AppBar)<{ primary?: boolean }>`
 
${mediaQueries("lg")`
background: linear-gradient(to left,#F5F7FA,#fafafa);
color:#fafafa;
padding: 0;
margin:0;

  `}
  background:linear-gradient(to right,#fc6076,#ff8b1a);
`
export const ToolBarCustom=styled(Toolbar)`

padding:0;
margin:0;
display:flex;
justify-content:space-between;
align-items:center;

`
export const BrandText = styled(Typography)<{primary?:boolean}>`

${mediaQueries("lg")`

color:#fafafa;
width:180px;
height:100%;
border-radius:0 0 50px 0;
background:linear-gradient(to left,#fc6076,#ff8b1a);
font-weight:600;
height:60px;
margin:0;
padding-top:15px;
padding-left:60px;

       
  `}
   border-radius:none;
        background:transparent;
        width:100px;
        font-weight:500;
        padding-left:20px;
        padding-top:5px;
        color:#fafafa;
       

  `
   
 
export const CustomTabs= styled(Tabs)`
${mediaQueries("lg")`
height:100%;
display:flex;
margin-left:auto;
flex-grow:3;

  `}
display:none;

`
export const CustomIconButton= styled(IconButton)`
${mediaQueries("lg")`
display:none;
  `}
background:#ff8b1a;
width:60px;
height:60px;
padding:0;
margin:0;
border-radius:0 50% 50% 0;
box-shadow:3px 5px 4px #8f8f8f50;
display:block;
`


export const AvatarContainer= styled(Container)`
display:flex;
height:60px;
width:200px;
align-items:center;
flex-grow:1;
justify-content:space-around;
`
export const StyledAvatar = styled(Avatar)`
padding:0;
margin:0;
height:30px;
width:30px;
&>img{
  height:100%;
}
`

// linear-gradient(to left,#fc6076,#ff8b1a,#ff5c44);


// mediaquery + ts
// ${mediaQueries("md")`
//     background-color: green;
//   `};
//   ${props => mediaQueries("md")(`width: ${props.width}px`)}
// `;