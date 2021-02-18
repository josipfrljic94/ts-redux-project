import styled from 'styled-components';
import Button from '@material-ui/core/Button';


export const CustomButton = styled(Button)<{ primary?: boolean }>`
background: ${props => props.primary ? 'red' : 'white'};
color: ${props => props.primary ? 'white' : 'red'};
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 1px solid green;
border-radius: 3px;
`