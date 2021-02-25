import {ActionType} from "../action-types/index";
import {Actions} from "../actions";
import {Dispatch} from "redux";
import axios from "axios";



export const ListJobs=(searchKeyword:string,place:string)=>{
    return async(dispatch:Dispatch<Actions>)=>{
        dispatch(
            {
                type: ActionType.SEARCH_REPOSITORY_ACTIONS
            });
        try {
            if( place===''){
                const {data}= await axios.get(`https://job-list-api.herokuapp.com/list?q=${searchKeyword}`);
                dispatch({
                    type:ActionType.SEARCH_REPOSITORY_SUCCESS,
                    payload:data
                });

            }else{
             
                const {data}=await axios.get(`https://job-list-api.herokuapp.com/list?q=${searchKeyword}&place=${place}`);

                
                dispatch({
                    type:ActionType.SEARCH_REPOSITORY_SUCCESS,
                    payload:data
                })
               
              

               

            }
           
           
           
            
        } catch (error) {
            dispatch({
                type:ActionType.SEARCH_REPOSITORY_ERROR,
                payload:error.massage,
            })
           
        }
    }
}


// const {data}= await axios.get('https://job-list-api.herokuapp.com/list',
// { params:{
//      text:term,
//  }}
//  )
//  const names= data.objects.map((result:any)=>{
//           return(result.package.name)})