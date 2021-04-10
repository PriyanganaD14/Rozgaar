import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%"
  }
});

const Success = ({ img, para, title }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} key={img}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={img}
          title={title}
          className={classes.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {para}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Success;