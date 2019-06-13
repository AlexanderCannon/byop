import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import "./style.css";

const QR = require("./assets/qr.png");

const FarpointLabs = () => {
  return (
    <div className="byop-app__qr">
      <img className="byop-app__qr-image" src={QR} />
    </div>
  );
};

export default FarpointLabs;
