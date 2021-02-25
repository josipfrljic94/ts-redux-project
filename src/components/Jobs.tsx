import  { Component } from 'react'
import {connect} from "react-redux";
import {JobType} from "../state/actions";
import JobCard from "./JobCard";
import {ListJobs} from "../state/action-creators";

import {Paper,Container,Grid} from '@material-ui/core';

interface JobProps{
jobs: JobType[]; 
loading:boolean;
error:string;
ListJobs:(searchKeyword:string,place:string)=>JobType[] ;
}

 class Jobs extends Component<JobProps> {
    state={
        searchKeyword:"Zagreb",
        place:""
    }
   

  componentDidMount(){
   this.props.ListJobs("","");
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
  jobs: JobType[]; 
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
        ListJobs:(searchKeyword:string,place:string)=>dispatch(ListJobs(searchKeyword,place))
    }
   }

  export default connect(
     mapStateToProps,MapDispatchToProps)(Jobs);
