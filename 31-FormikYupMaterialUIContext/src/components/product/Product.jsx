import React, { useContext, useState } from 'react';
 import { styled } from '@mui/material/styles';
 import Card from '@mui/material/Card';
 import CardHeader from '@mui/material/CardHeader';
 import CardMedia from '@mui/material/CardMedia';
 import CardContent from '@mui/material/CardContent';
 import CardActions from '@mui/material/CardActions';
 import Collapse from '@mui/material/Collapse';
 import Avatar from '@mui/material/Avatar';
 import IconButton from '@mui/material/IconButton';
 import Typography from '@mui/material/Typography';
 import { red } from '@mui/material/colors';
 import FavoriteIcon from '@mui/icons-material/Favorite';
 import ShareIcon from '@mui/icons-material/Share';
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ProductContext } from '../context/ProductContext';
 
 
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
 
 
 const RecipeReviewCard = ({ product }) => {
   const [expanded, setExpanded] = useState(false);
 
   const handleExpandClick = () => {
     setExpanded(!expanded);
   };
 
   return (
     <Card sx={{ maxWidth: 345, margin: 3 }}>
       <CardHeader
         avatar= {
         <Avatar sx={{ bgcolor: red[500] }}>{product.title[0]}</Avatar>
           }
         action={
           <IconButton aria-label="settings">
             <MoreVertIcon />
           </IconButton>
         }
         title={product.title}
         subheader={`${product.price}`}
       />
       <CardMedia
   component="img"
   image={product.image}
   alt={product.title}
   sx={{
     height: 200,
     width: '100%',
     objectFit: 'contain',
     backgroundColor: '#f5f5f5',
     padding: 2
   }}
 />
       <CardContent>
         <Typography variant="body2" color="text.secondary">
           {product.description.substring(0, 100)}...
         </Typography>
       </CardContent>
       <CardActions disableSpacing>
         <IconButton aria-label="add to favorites">
           <FavoriteIcon />
         </IconButton>
         <IconButton aria-label="share">
           <ShareIcon />
         </IconButton>
         <ExpandMore
           expand={expanded}
           onClick={handleExpandClick}
           aria-expanded={expanded}
           aria-label="show more"
         >
           <ExpandMoreIcon />
         </ExpandMore>
       </CardActions>
       <Collapse in={expanded} timeout="auto" unmountOnExit>
         <CardContent>
           <Typography paragraph>{product.description}</Typography>
         </CardContent>
       </Collapse>
     </Card>
   );
 };
 
 
 const Producs = () => {
   const card = useContext(ProductContext);
 
   return (
     <div style={{ display: 'flex', flexWrap: 'wrap', alignItems:"center", justifyContent:"center"}}>
       {card.map((item) => (
         <RecipeReviewCard key={item.id} product={item} />
       ))}
     </div>
   );
 };
 
 export default Producs;