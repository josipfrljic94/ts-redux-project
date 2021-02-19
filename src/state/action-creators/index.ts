import {ActionType} from "../action-types/index";
import {Actions} from "../actions";
import {Dispatch} from "redux";
import axios from "axios";



export const ListJobs=(searchKeyword:string,categoryId:string)=>{
    return async(dispatch:Dispatch<Actions>)=>{
        dispatch(
            {
                type: ActionType.SEARCH_REPOSITORY_ACTIONS
            });
        try {
            if(searchKeyword==="" && categoryId===''){
                const {data}= await axios.get('https://job-list-api.herokuapp.com/list');
                dispatch({
                    type:ActionType.SEARCH_REPOSITORY_SUCCESS,
                    payload:data
                });

            }else{
               if(searchKeyword !=="" && categoryId !== ""){
                const {data}=await axios.get(`https://job-list-api.herokuapp.com/list?place=${searchKeyword}&categoryId=${categoryId}`);

                
                dispatch({
                    type:ActionType.SEARCH_REPOSITORY_SUCCESS,
                    payload:data
                })
               }
                // const {data}=await axios.get(`https://job-list-api.herokuapp.com/list?place=${searchKeyword}`);

               

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