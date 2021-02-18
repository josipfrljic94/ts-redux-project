import {ActionType} from "../action-types/index";
import {Actions, JobType} from "../actions";




interface RepositoryState{
     loading:boolean;
     error:string | null;
    data:JobType[] 
}
const initialState={
    loading:false,
    error:null,
    data:[]
}
const reducer= (state:RepositoryState=initialState,action:Actions):RepositoryState=>{
    switch(action.type){
        case ActionType.SEARCH_REPOSITORY_ACTIONS:
            return {loading:true,error:null,data:[]};
        case ActionType.SEARCH_REPOSITORY_SUCCESS:
            return {loading:false,error:null,data:action.payload};
        case ActionType.SEARCH_REPOSITORY_ERROR:
            return{loading:false,error:action.payload,data:[]}
        default:
            return state;    
    }
};

export default reducer
