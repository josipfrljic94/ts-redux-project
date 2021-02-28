import styled from "styled-components";
import {Button} from '@material-ui/core';



export const CustomButton = styled(Button)<{ primary?: boolean }>`
background: ${props => props.primary ? 'red' : 'linear-gradient(to right,#38acec,#71c7f5)'};
color: ${props => props.primary ? 'white' : '#fafafa'};
font-size: 1em;
height:45px;
width:200px;
border:none;
border-radius:25px;
&:hover {
    background: ${props => props.primary ? 'red' : 'linear-gradient(to right,#3790bf,#5aaedb)'};
}
`