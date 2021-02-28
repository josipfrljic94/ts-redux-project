import RepositoriesList from "../RepositoriesList/RepositoriesList";
import {BannerContainer,BannerText} from "./Banner.style";
const Banner = () => {
    return (
       <BannerContainer>
           <BannerText  variant="h4">
                Pronađi posao među 4368 objavljenih oglasa
                {/* <RepositoriesList/> */}
              
           </BannerText>
           <RepositoriesList/>
       </BannerContainer>
    )
}

export default Banner
