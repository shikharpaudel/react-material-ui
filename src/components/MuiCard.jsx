import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
const MuiCard = () => {
  return (
    <Box width={1000} display='flex' sx={{ gap: 8 }}>
      <Card>
        <CardMedia component="img" height={200} image="https://picsum.photos/200/300" alt ="random image"/>
        <CardContent>
          <Typography variant="h5" color="primary.main">
            React Js
          </Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            deleniti dolorum vel consequatur tempora autem eveniet odio voluptas
            consequuntur quos maiores, harum quod. Hic voluptatibus atque
            similique ipsum? Culpa, dolorum?
          </Typography>
        </CardContent>
        <CardActions>
  <Button variant="outlined" size="small">Share</Button>
  <Button variant="contained" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia component="img" height={200} image="https://picsum.photos/200/300" alt ="random image"/>
        <CardContent>
          <Typography variant="h5" color="primary.main">
            Next JS
          </Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            deleniti dolorum vel consequatur tempora autem eveniet odio voluptas
            consequuntur quos maiores, harum quod. Hic voluptatibus atque
            similique ipsum? Culpa, dolorum?
          </Typography>
        </CardContent>
        <CardActions>
  <Button variant="outlined" size="small">Share</Button>
  <Button variant="contained" size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card>
        <CardMedia component="img" height={200} image="https://picsum.photos/200/300" alt ="random image"/>
        <CardContent>
          <Typography variant="h5" color="primary.main">
         Vue JS
          </Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            deleniti dolorum vel consequatur tempora autem eveniet odio voluptas
            consequuntur quos maiores, harum quod. Hic voluptatibus atque
            similique ipsum? Culpa, dolorum?
          </Typography>
        </CardContent>
        <CardActions>
  <Button variant="outlined" size="small">Share</Button>
  <Button variant="contained" size="small">Learn More</Button>
        </CardActions>
      </Card>
      </Box>
  );
};

export default MuiCard;
