import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"
import { useHistory } from "react-router";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import CompanyImage from "images/company.jpg"

type Props = {
  data: {
    id: number;
    companyName: String;
  };
}

const useStyles = makeStyles(() => ({
  card: {
    width: 130,
    margin: "15px 10px",
  },
}))

const CompanyMiniTile: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="30"
          image={CompanyImage}
          alt="company image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.data.companyName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CompanyMiniTile