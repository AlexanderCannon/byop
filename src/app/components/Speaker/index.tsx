import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import "./style.css";

// tslint:disable-next-line: no-var-requires
const old = require("./assets/old.jpg");

const Speaker = () => {
  return (
    <div className="byop-app--speaker">
      <Card color="text.primary">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="our wonderful speaker"
            className="byop-app--speaker-image"
            height="250"
            image={old}
            title="Your wonderful"
          />
          <CardContent>
            <Typography gutterBottom={true} variant="h5" component="h2">
              Alexander Cannon
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Founder &amp; CEO of Farpoint Labs. Lover of JavaScript, React,
              and this lovely audience.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Follow him on twitter at:
            </Typography>
            <Typography variant="subtitle1">@alexmcan</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://twitter.com/alexmcan"
            target="blank"
            rel="noopener noreferrer">
            Twitter
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://wwww.github.com/alexandercannon/byop"
            target="blank"
            rel="noopener noreferrer">
            Github
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Speaker;
