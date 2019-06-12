import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import Logo from "../Logo";
import "./style.css";

const FarpointLabs = () => {
  return (
    <div className="byop-app--farpoint-labs">
      <Card color="text.primary">
        <CardActionArea>
          <Logo
            primaryColor="var(--color-black)"
            className="byop-app--farpoint-logo"
          />
          <CardContent>
            <Typography gutterBottom={true} variant="h5" component="h2">
              Engineering Transformation Consultancy
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Farpoint Labs specalise in DevOps, automation and event sourcing.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Check the website at:
            </Typography>
            <Typography variant="subtitle1">www.farpointlabs.com</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href="https://twitter.com/farpointlabs"
            target="blank"
            rel="noopener noreferrer">
            Twitter
          </Button>
          <Button
            size="small"
            color="primary"
            href="https://www.farpointlabs.coms"
            target="blank"
            rel="noopener noreferrer">
            Website
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default FarpointLabs;
