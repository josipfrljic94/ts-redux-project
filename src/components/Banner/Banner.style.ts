import styled from "styled-components";
import {Typography,Paper,IconButton,Tab} from '@material-ui/core/';

export const BannerContainer = styled('div')`
height:60vh;
width:100%;
display:grid;
justify-content:center;
/* justify-items:center; */
align-content:center;
background:url('https://images.pexels.com/photos/4050415/pexels-photo-4050415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
background-position:center;
background-repeat:no-repeat;
background-size:cover;
`
export const BannerText= styled(Typography)`
margin-bottom:20px;
color:#fafafa;
text-align:center;
font-size:2.2rem;
font-weight:400;
`