import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import CompanyImage from "images/company.jpg"
import { Link } from "react-router-dom";

type Props = {
  data: {
    id: number;
    companyName: String;
  };
}

const useStyles = makeStyles(() => ({
  card: {
    width: 150,
    margin: "10px 10px",
  },
}))

const CompanyMiniTile: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea >
        <Link to={`/detail/${props.data.id}`} target="_blank" rel="noopener">
          <CardMedia
            component="img"
            image={CompanyImage}
            alt="company image"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.data.companyName}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  )
}

export default CompanyMiniTile