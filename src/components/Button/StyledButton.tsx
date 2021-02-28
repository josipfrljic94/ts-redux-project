import {CustomButton} from "./Button.style";
interface ButtonProps{
    buttontext:string
}
const StyledButton:React.FC<ButtonProps>= ({buttontext}) => {
    return (
        <CustomButton>
                {buttontext}
        </CustomButton>
    )
}

export default StyledButton;
