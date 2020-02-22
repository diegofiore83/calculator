import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Calculator from './components/Calculator';

const useStyles = makeStyles(theme => ({
  app: {
    textAlign: 'center',
  },
  appCore: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)'
  }
}));

const Component = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <div className={classes.appCore}>
        <Calculator />
      </div>
    </div>
  );
};

Component.displayName = 'App';

Component.propTypes = {};

Component.defaultProps = {};

export default Component;
