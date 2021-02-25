import {JobType} from "../state/actions";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

interface JobCardProps{
    job:JobType
}
const JobCard: React.FC<JobCardProps>= ({job}) => {
    const classes = useStyles();
    return (
        <Grid item lg={4}>
        <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={job.image}
         
        />
        <CardContent>
          <Typography>
          {job.title}
          </Typography>
            <Typography>
                {job.place}
            </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {job.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
         Details
        </Button>
       <Typography>
           Quantity : {job.qtn}
       </Typography>
      </CardActions>
    </Card>
    </Grid>
    )
}

export default JobCard
