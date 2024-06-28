import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';




import axios from 'axios';
import { useState , useEffect } from 'react';
import './ProductCard.css';





const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  var [output,setOutput] = useState([])                             //square brackets used because we expect multiple values
  useEffect(()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((res)=>{
          console.log(res.data);
          setOutput(res.data);
      })                                     //error handling functions
      .catch((error) => {
          console.log(error);
      });

  },[]) 



  return (

    <div className="container">

          {output.map((val,i)=> {

return(


  



    <Card sx={{ maxWidth: 345 }} className='productcard'  key={i}>
        <CardHeader
      
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title= {val.title}
          subheader="In Stock"
        />
        <CardMedia
          component="img"
          height="300"
          image={val.image}
          alt="image here"
        />
        <CardContent>
            <Typography>
             Rs {val.price}/-
            </Typography>
          <Typography variant="body2" color="text.secondary">
           {val.description}
          </Typography>

          <Typography variant="body1" color="text.primary">
           #{val.category}
          </Typography>
          
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="star">
            <StarIcon style={{color:'#FBD737'}} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon style={{color:'#5F5F5E'}}/>
          </IconButton>

          <IconButton aria-label="cart">
            <ShoppingCartIcon style={{color : 'cornflowerblue'}}/>
          </IconButton>
         
        </CardActions>
       
            <Button className="buy" variant="outlined">Buy Now</Button>
      </Card> 


   



      )


          })}
       

    </div>
    
  );
}
