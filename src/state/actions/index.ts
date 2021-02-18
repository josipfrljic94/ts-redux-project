import {ActionType} from "../action-types/index";

// Types of job
export type JobType={
    id:string;
    title:string;
    categoryId:string;
    qtn:number;
    place:string;
    description:string,
    experience:number,
    image:string
  }

interface SearchRepositoryActions{
    type:ActionType.SEARCH_REPOSITORY_ACTIONS,
    
}

interface SearchRepositorySuccess{
    type:ActionType.SEARCH_REPOSITORY_SUCCESS,
    payload:JobType[]
    
}

interface SearchRepositoryError{
    type:ActionType.SEARCH_REPOSITORY_ERROR,
    payload:string
    
}

export type Actions=
SearchRepositoryActions |
SearchRepositoryError |
SearchRepositorySuccess;
