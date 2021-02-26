import styled from 'styled-components';
import {mediaQueries} from "../../MediaQuery.config";
import {AppBar,Toolbar,Typography,IconButton} from '@material-ui/core/';


export const NavbarElement = styled(AppBar)<{ primary?: boolean }>`
 background: ${props => props.primary ? 'linear-gradient(to left,#F5F7FA,#fafafa)' : 'linear-gradient(to left,#fc6076,#ff8b1a)'};
color:${props => props.primary ? '#ff8b1a' : '#fafafa'};
padding: 0;
margin:0;
`
export const ToolBarCustom=styled(Toolbar)`
padding:0;
margin:0;
display:flex;
justify-content:space-between;
align-items:center;

`
export const BrandText = styled(Typography)<{primary?:boolean}>`

${mediaQueries("xl")`

color:#fafafa;
width:200px;
height:100%;
border-radius:0 0 30px 0;
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
   
 


// @media only screen and (max-width: 1128px) {
//     border-radius:0;
//     background:none;
//     width:100px;
//     font-weight:500;
//     padding-left:20px;
//     padding-top:5px;
//   }
// }


// linear-gradient(to left,#fc6076,#ff8b1a,#ff5c44);


// mediaquery + ts
// ${mediaQueries("md")`
//     background-color: green;
//   `};
//   ${props => mediaQueries("md")(`width: ${props.width}px`)}
// `;