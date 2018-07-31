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

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

class NewMint extends React.Component {
    state = {};

    render() {
        const { classes } = this.props;

    return (
        <form className={classes.container} noValidate autoComplete="off">
        
            <Paper className={classes.root} elevation={3}>
                <Typography className="pageTitle">
                    <h3>Add a New Mint!</h3>
                </Typography>
                <TextField
                    id="title"
                    label="Mint Title"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="href"
                    label="*&nbsp;Image HREF"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="link"
                    label="Link"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="description"
                    label="Description"
                    className={classes.textField}
                    margin="normal"
                    multiline
                />
                <Typography className="pageTitle" style={{textAlign: 'left'}}>
                    * Required
                </Typography>
                <Button variant="contained" color="secondary" className={classes.button}>
                    Add Mint
                </Button>
            </Paper>

      </form>
    );
  }
}

NewMint.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewMint);