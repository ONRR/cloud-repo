import React, { useContext } from 'react'

import { AppStatusContext } from '../../../stores/app-status-store'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.modal + 1,
    color: 'white',
  },
}))
/**
 * Handles when a component sends a loading status to the application status provider
 */
const LoadingStatusBackdrop = () => {
  const theme = useTheme()
  const classes = useStyles(theme)
  const { state } = useContext(AppStatusContext)

  return (
    <div>
      <Backdrop className={classes.backdrop} open={state.loadingMessages.length > 0}>
        <Grid container alignItems='center' direction="column">
          <Grid item xs={12}>
            <CircularProgress color="inherit" disableShrink />
          </Grid>
          {state.loadingMessages.length > 0 &&
            <Grid item xs={12}>Updating...</Grid>
          }
        </Grid>
      </Backdrop>
    </div>
  )
}

export default LoadingStatusBackdrop
