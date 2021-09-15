import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    wrapper: {},
    blueBlock: {},
    
}));

const SignIn = () => {
    const classes = useStyles()
    return (
        <div>
          Sign In
        </div>
    );
};

export default SignIn;