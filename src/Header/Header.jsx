import React from "react";
import { Toolbar, AppBar, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


export const Header = (props) => {
    const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.root}>
        {props.isAuth ? <Button color="inherit" onClick={props.logout}>Sign out</Button> 
        : <Button color="inherit">
              <Link to={`/signIn`} className={classes.link} variant="body2">Sign In</Link>
            </Button>
        }
 
            {
              !props.isAuth ? <Button color="inherit">
              <Link to={`/signUp`} className={classes.link} variant="body2">Sign Up</Link>
            </Button> : <></>
            }
          
        </Toolbar>
      </AppBar>
    </>
  );
};


const useStyles = makeStyles({
    root: {
     display: 'flex',
     justifyContent: 'flex-end'
    },
    link: {
      color: 'white',
      textDecoration: 'none'
    }
  });