import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

library.add(faUser, faEllipsisV)

const styles = theme => ({
    galleryClass: {
      width: 343,
      marginTop: 15,
      marginLeft: 30,
      marginRight: 0,      
    },
    container: {
        paddingTop: 15,
        paddingBottom: 0,
        paddingLeft: 15,
        paddingRight: 15
    }
  });

class Mint extends React.Component {
    state = {
        anchorEl: null,        
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };
    
    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.galleryClass}>
                <Paper className={classes.container} elevation={10}>     
                    <a href="#">               
                        <img className="mint" src={this.props.src} />
                    </a>
                    <IconButton>
                        <img src="assets/img/leaf.png" className="mintIt" title="Mint it!"/>
                    </IconButton>
                    <div className="userInfo">
                        <IconButton className='iconButtons'>
                            <FontAwesomeIcon style={{color: "#ff5722"}}   icon="user"/>
                        </IconButton>
                        
                        
                        <IconButton className='iconButtons'
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                        
                            <FontAwesomeIcon style={{color: "#ff5722"}}   icon="ellipsis-v"/>
                        
                        </IconButton>
                        
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                        <MenuItem onClick={this.handleClose}>Mint It!</MenuItem>
                        <MenuItem onClick={this.handleClose}>View Mint</MenuItem>
                        <MenuItem onClick={this.handleClose}>View User</MenuItem>
                        <MenuItem onClick={this.handleClose}>Not Interested</MenuItem>
                        <MenuItem onClick={this.handleClose}>Report</MenuItem>
                    </Menu>






                            
                        
                    </div>
                </Paper>
            </div>
        );
    }
}

Mint.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mint);
