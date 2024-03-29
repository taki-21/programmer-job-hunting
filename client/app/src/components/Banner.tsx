import React from "react";
import BannerImage from "images/banner.png";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, CardMedia, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  banner: {
    padding: "10px 0px",
    background: "#EDF2F7",
    width: "100%",
    marginBottom: "20px",
  },
}));

const Banner: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container justifyContent="center" className={classes.banner}>
        <Grid item xs={6}>
          <CardActionArea>
            <Link to={"/skill"}>
              <CardMedia
                component="img"
                image={BannerImage}
                alt="company image"
              />
            </Link>
          </CardActionArea>
        </Grid>
      </Grid>
    </>
  );
};

export default Banner;
