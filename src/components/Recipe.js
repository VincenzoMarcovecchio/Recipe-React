import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexDirection: 'column',
    '& > * + *': {
      marginTop: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    width: '100%',
  },
  wrapper: {
    width: '80%',
    margin: '2rem auto',
  },
  width: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

export default function Recipe({ data }) {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.wrapper} spacing={3}>
        {data.map((rec, index) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Card key={index} className={classes.width}>
                <CardActionArea>
                  <div className={classes.root}>
                    <Rating
                      name='half-rating'
                      defaultValue={2.5}
                      precision={0.5}
                      style={{ padding: '0.5rem' }}
                    />
                  </div>
                  <CardMedia
                    component={Link}
                    to={{
                      pathname: `/recipio/${rec.recipe.label}`,
                      state: `${rec.recipe.label}`,
                    }}
                    className={classes.media}
                    image={rec.recipe.image}
                    title={rec.recipe.label}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {rec.recipe.label.length < 23
                        ? `${rec.recipe.label}`
                        : `${rec.recipe.label.substring(0, 23)}...`}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      <ul style={{ textAlign: 'left', listStyle: 'none' }}>
                        {rec.recipe.healthLabels
                          .slice(0, 3)
                          .map((li, index) => {
                            return <li key={index}>{li}</li>;
                          })}
                      </ul>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button
                    component={Link}
                    to={{
                      pathname: `/recipio/${rec.recipe.label}`,
                      state: `${rec.recipe.label}`,
                    }}
                    size='small'
                    color='primary'
                  >
                    View Recipe
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
