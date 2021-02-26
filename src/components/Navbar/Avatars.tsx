import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import {AvatarContainer} from "./Navbar.style";
interface AvatarsProps{}
const Avatars:React.FC<AvatarsProps>= ({}) => {
    return (
       <AvatarContainer>
        <Avatar>H</Avatar>
      <Avatar >N</Avatar>
      <Avatar >OP</Avatar>
       </AvatarContainer>
    )
}

export default Avatars;
