import {useEffect,useState} from "react";
import { Input,Button } from '@material-ui/core';
import {connect} from "react-redux";
import {JobType} from "../state/actions";
import { useSelector, useDispatch } from 'react-redux';
import {ListJobs} from "../state/action-creators";
import { AnyAction } from "redux";



interface JobProps{
 

ListJobs:(searchKeyword:string,categoryId:string)=>JobType[]
    // ListJobs: ()=>JobType[]
    }

const RepositoriesList :React.FC<JobProps> = ({ListJobs}) => {

    // const dispatch = useDispatch();
    const [searchKeyword, setSearchKeyword] = useState('');
    const [category, setCategory] = useState('')

    
    const FilterHandler=(e:any)=>{
        e.preventDefault();
        // dispatch(ListJobs(searchKeyword,category));
        ListJobs(searchKeyword,category);
       
    }
   useEffect(() => {
    // dispatch(ListJobs(searchKeyword,category));
    ListJobs(searchKeyword,category)
   }, [])

    return (
        <form>
            <Input onChange={(e)=>setSearchKeyword(e.target.value)}/>
            <Input onChange={(e)=>setCategory(e.target.value)}/>
            <Button onClick={(e)=>{FilterHandler(e)}}>Add</Button>
        </form>
    )
       
    
}
interface JobPropsType{
    jobs:JobType[];
    loading:boolean;
    error:string;
    }
    
    // interface JobDProps{
    //     ListJobs:(searchKeyword:string,categoryId:string)=>{type:string,payload:JobType[]}
    // }
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
 