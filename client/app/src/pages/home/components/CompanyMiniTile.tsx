import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import DummyImage from "images/company.jpg"
import { Link } from "react-router-dom";
import { BriefCompany } from '../../../interfaces/index';

const useStyles = makeStyles(() => ({
  card: {
    width: 150,
    margin: "10px 10px",
  },
}))

const CompanyMiniTile: React.FC<{ props: BriefCompany }> = ({ props }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea >
        <Link to={`/detail/${props.id}`} >
          <CardMedia
            component="img"
            image={props.companyImage ?? DummyImage}
            alt="company image"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.companyName}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  )
}

export default CompanyMiniTile