import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popper from '@material-ui/core/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function ListIngredients({ items }) {
  const newArray = items.map((element) => element.text);
  const newArray2 = items.map((element) => element.weight);

  const classes = useStyles();
  return (
    <>
      {newArray
        ? newArray.map((ite, index) => {
            return (
              <>
                <PopupState
                  key={index}
                  variant='popper'
                  popupId='demo-popup-popper'
                >
                  {(popupState) => (
                    <div>
                      <Button
                        className='useless'
                        variant='contained'
                        color='primary'
                        {...bindToggle(popupState)}
                      >
                        {ite}
                      </Button>

                      <Popper {...bindPopper(popupState)} transition>
                        {({ TransitionProps }) => (
                          <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                              <Typography className={classes.typography}>
                                {Math.ceil(newArray2[index])} grams
                              </Typography>
                            </Paper>
                          </Fade>
                        )}
                      </Popper>
                    </div>
                  )}
                </PopupState>
              </>
            );
          })
        : 'loading'}
    </>
  );
}
