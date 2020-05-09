import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Form({ getrecipe }) {
  const classes = useStyles();
  return (
    <>
      <div className='wrappa'>
        <form
          className={classes.root}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
            margin: 'auto',
          }}
          noValidate
          autoComplete='on'
          onSubmit={getrecipe}
        >
          <TextField
            id='standard-basic'
            label='Search'
            type='text'
            name='recipeName'
            style={{ width: '70%' }}
          />
          <Button
            type='submit'
            style={{ height: '100%' }}
            variant='contained'
            color='primary'
          >
            Search
          </Button>
        </form>
      </div>
    </>
  );
}
