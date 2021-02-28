import {useState} from "react";
import {connect} from "react-redux";
import {JobType} from "../../state/actions";
import {ListJobs} from "../../state/action-creators";
import {StyledForm,StyledInput} from "./RepositoriesList.style";
// MATERIAL UI


import { TextField} from '@material-ui/core';
import {FormControl,FormGroup} from '@material-ui/core';




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
    const [places, setPlaces] = useState<string[]>(["Osijek","Rijeka","Slavonski Brod","Split","Varaždin","Zagreb"])
    
    const FilterHandler=(searchKeyword:any,place:string)=>{

        ListJobs(searchKeyword,place);
       
    }
const handlePlace=(event: React.ChangeEvent<{ value: any }>)=>{
    setPlace(event.target.value as string);
    FilterHandler(searchKeyword,event.target.value)
}


    return (
        <FormControl>
         <StyledForm>

            <StyledInput
         
          id="place-input"
          label="Search keyword..."
          type="text"
          autoComplete=""
          onChange={(e)=>{setSearchKeyword(e.target.value);FilterHandler(searchKeyword,place)}}
          InputProps={{ disableUnderline: true }} 
        />
         
          
           <StyledInput
 id="standard-select-place"
 select
 label="Filter place"
 defaultValue=''
 onChange={handlePlace}
 InputProps={{ disableUnderline: true }} 
 SelectProps={{
   native: true,
 }}
//  helperText="Filter place"  
 >
   <option value="">
    
   </option>
   {places.map(p=>{
                  return (<option  key={p} value={p}>{p}</option>)
              })}
  
 </StyledInput>
           
   </StyledForm>
        </FormControl>
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
 
  