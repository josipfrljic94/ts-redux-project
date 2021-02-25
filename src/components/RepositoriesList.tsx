import {useState} from "react";
import { Input} from '@material-ui/core';
import {connect} from "react-redux";
import {JobType} from "../state/actions";
import {ListJobs} from "../state/action-creators";

// MATERIAL UI
import {InputLabel,Select,FormHelperText,FormControl,NativeSelect} from '@material-ui/core';
import { BorderOuter, BorderRight } from "@material-ui/icons";




// PROPS OF COMPONENT
interface JobProps{
jobs:JobType[],
loading:boolean;
error:string;
ListJobs:(searchKeyword:string,place:string)=>JobType[] 
    }


const RepositoriesList :React.FC<JobProps> = ({ListJobs}) => {

  

    // MANAGE LOCAL STATE
    const [searchKeyword, setSearchKeyword] = useState('');
    const [place, setPlace] = useState('');
    const [places, setPlaces] = useState<string[]>(["Osijek","Rijeka","Slavonski Brod","Split","Zagreb"])
    
    const FilterHandler=(searchKeyword:any,place:string)=>{

        ListJobs(searchKeyword,place);
       
    }
const handlePlace=(event: React.ChangeEvent<{ value: any }>)=>{
    setPlace(event.target.value as string);
    FilterHandler(searchKeyword,event.target.value)
}


    return (
        <form>
            <Input onChange={(e)=>{setSearchKeyword(e.target.value);FilterHandler(searchKeyword,place)}}/>
         
           <select defaultValue="" onChange={handlePlace}>
              <option  value="">None</option>
              {places.map(p=>{
                  return (<option  key={p} value={p}>{p}</option>)
              })}
                
          </select>
           
    
        </form>
    )
       
    
}
interface JobPropsType{
    jobs:JobType[];
    loading:boolean;
    error:string;
    }
    
    const mapStateToProps=(state:any):JobPropsType=>({
  
        jobs:state.repositories.data,
        loading:state.repositories.loading,
        error:state.repositories.error
       
       })
    


       const MapDispatchToProps=(dispatch:any)=>{
        return{
            ListJobs:(searchKeyword:string,categoryId:string)=>dispatch(ListJobs(searchKeyword,categoryId))
        }
       }

   export default connect(
   mapStateToProps,MapDispatchToProps)(RepositoriesList);
 