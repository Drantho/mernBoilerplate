import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Masonry from 'react-masonry-component';
import Mint from './Mint';

const styles = theme => ({
  galleryClass: {
    width: 335,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    padding: 15
  }
});

const images=[
  {
    imageID: 1, src: '../assets/img/1.jpg'
  },
  {
    imageID: 2, src: '../assets/img/2.jpg'
  },
  {
    imageID: 3, src: '../assets/img/3.jpg'
  },
  {
    imageID: 4, src: '../assets/img/4.jpg'
  },
  {
    imageID: 5, src: '../assets/img/5.jpg'
  },
  {
    imageID: 6, src: '../assets/img/6.jpg'
  },
  {
    imageID: 7, src: '../assets/img/7.jpg'
  },
  {
    imageID: 8, src: '../assets/img/8.jpg'
  },
  {
    imageID: 9, src: '../assets/img/9.jpg'
  },
];

class Home extends React.Component {
    state = {
    };

    

    render() {

        return (
          <Masonry
            className={'galleryClass'} // default '' 
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
        
        {
          images.map(function(item, i){            
            return <Mint key={i} src={item.src}/>
          })
        }
          <Mint src={images[0].src}/>

        </Masonry>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
