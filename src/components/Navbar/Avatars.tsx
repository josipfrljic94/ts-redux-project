import React from 'react';
import {AvatarContainer,StyledAvatar} from "./Navbar.style";
import StyledButton from "../Button/StyledButton" 
interface AvatarsProps{}
const Avatars:React.FC<AvatarsProps>= ({}) => {
    return (
       <AvatarContainer>
       <StyledButton buttontext={"prijava"}/>
      <StyledAvatar ><img src="https://www.posao.hr/images/hr_lan.png"></img></StyledAvatar>
      <StyledAvatar ><img src="https://www.posao.hr/images/en_lan.svg"></img></StyledAvatar>
       </AvatarContainer>
    )
}

export default Avatars;
