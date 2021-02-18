import  { Component } from 'react';
import { CustomButton } from './Container.style';
import { StylesProvider } from '@material-ui/core/styles';



interface IProps{
    primary?: boolean
  }

export default class Container extends Component<IProps>{
    
   
   
    render() {
       
        return (
            <StylesProvider injectFirst>
           <CustomButton primary>
               Start
           </CustomButton>
           </StylesProvider>
        )
    }

}
