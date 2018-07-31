import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const mint = {
  title: 'Beach Idea',
  src: '../assets/img/1.jpg',
  link: 'http://www.peninsularv.net',
  description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas libero nec justo tincidunt, sit amet condimentum libero rhoncus. Nulla facilisi. Fusce commodo et velit quis consequat. Etiam nec lorem molestie, viverra justo sed, sagittis lorem. In hac habitasse platea dictumst. Duis venenatis, lorem vitae sollicitudin cursus, ipsum justo facilisis justo, quis semper nibh lacus ac erat. Nam viverra urna a ultrices sodales. Nunc in lectus quam. Vivamus viverra justo vehicula turpis pretium, at consectetur neque tristique. Suspendisse cursus nec ante nec pretium. Donec dui quam, sagittis in tellus eu, euismod viverra arcu. Sed faucibus blandit dui, eu pulvinar sem accumsan ac. Aenean lorem eros, venenatis sed suscipit non, ultrices ut ipsum. Sed in est non enim malesuada aliquam at id tortor. Maecenas nec dolor vestibulum, pulvinar purus eget, molestie nisi. Aliquam erat volutpat. Vivamus nec turpis sit amet lacus pellentesque semper. Nunc nec massa aliquet, laoreet sapien sit amet, mollis urna. Proin a nisl tortor. Ut nec eleifend metus. Curabitur rutrum magna ac orci varius faucibus. Sed scelerisque massa nec ante suscipit malesuada. Sed eu neque dolor. Suspendisse bibendum egestas augue quis venenatis. Nunc imperdiet lectus a nisi ornare cursus at vitae eros. Proin justo nunc, rutrum non nulla eget, tempor volutpat nisi. Praesent lobortis varius neque non rhoncus. Duis convallis feugiat magna eu fringilla. Nullam vestibulum felis iaculis, iaculis sapien eu, pretium nunc. Phasellus rutrum mi eget ligula iaculis ultrices. Praesent tristique mi risus, non feugiat sem iaculis at.'
}

const styles = theme => ({
  card: {
    marginLeft: 'auto',
    marginRight: 'auto',    
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ViewMint extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
        <img src='../assets/img/1.jpg'/>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                the rice, and cook again without stirring, until mussels have opened and rice is
                just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ViewMint.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewMint);