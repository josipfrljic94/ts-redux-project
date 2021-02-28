import styled from "styled-components";
import {TextField} from '@material-ui/core';

export const StyledForm= styled('div')`
display:flex;
width:100%;
justify-content:space-around;
/* flex-wrap:wrap; */
`

export const StyledInput= styled(TextField)`
width:250px;
height:45px;
border-radius:45px;
padding:7px 10px;
background:#fafafa;
color:#0a0a0a;
`