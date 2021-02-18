import  { Component } from 'react'
import {connect} from "react-redux";
import {JobType} from "../state/actions";
import {ListJobs} from "../state/action-creators";
import {Dispatch} from "redux";
import JobCard from "./JobCard";

import Grid, { GridSpacing } from '@material-ui/core/Grid';
import {Paper,Container} from '@material-ui/core';

interface JobProps{
jobs: JobType[]; 
loading:boolean;
error:string;
ListJobs: ()=>JobType[]
}

 class Jobs extends Component<JobProps> {

    componentDidMount() {
            this.props.ListJobs()
      }
    
    render() {
        return (
            <Paper>
              <Container>
              {this.props.loading && <div>Loading</div> }
              {this.props.error && <div>{this.props.error}</div> }
              
              {this.props.jobs && <Grid container justify='center' spacing={2}>{this.props.jobs.map(job=>{
               
                return( 
                  <JobCard key={job.id} job={job}/>
                )
              })} </Grid> }
              </Container>
            </Paper>  
        )
    }
}
interface JobPropsType{
jobs:JobType[];
loading:boolean;
error:string;
}

interface JobDProps{
    ListJobs:()=>Dispatch |any
}


const mapStateToProps=(state:any):JobPropsType=>({
  
   jobs:state.repositories.data,
   loading:state.repositories.loading,
   error:state.repositories.error
  
  })
const MapDispatchToProps=(dispatch:any)=>{
    return{
        ListJobs:()=>dispatch(ListJobs())
    }
}
  export default connect(
     mapStateToProps,MapDispatchToProps)(Jobs);
