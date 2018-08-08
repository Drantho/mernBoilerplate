import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 600,
        padding: 25
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '95%',
    },
    menu: {
        width: 200,
    },
    button: {
        marginTop: 15,
        marginBottom: 15
    }
});



class SignUp extends React.Component {
    state = {};

    render() {
        const { classes } = this.props;

    return (
        <form className={classes.container} noValidate autoComplete="off">
        
            <Paper className={classes.root} elevation={3}>
                <Typography className="pageTitle">
                    Sign Up
                </Typography>
                <TextField
                    id="userName"
                    label="User Name"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    margin="normal"
                    type="email"
                />
                <TextField
                    id="firstName"
                    label="First Name"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="lastName"
                    label="Last Name"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Password"
                    className={classes.textField}
                    margin="normal"
                    type="password"
                />
                <TextField
                    id="passwordRepeat"
                    label="Re-Enter Password"
                    className={classes.textField}
                    margin="normal"
                    type="password"
                />
                
                <Button variant="contained" color="secondary" className={classes.button}>
                    Sign Up
                </Button>
            </Paper>

      </form>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);