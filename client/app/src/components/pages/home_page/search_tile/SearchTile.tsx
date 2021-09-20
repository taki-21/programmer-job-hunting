import React from "react";
import { Link } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { CardActionArea, CardMedia, Grid, Typography } from "@material-ui/core";
import { Text } from "@chakra-ui/layout";
import SkillSearch from "images/skill_search.png"
import Search from "images/search.png";

const useStyles = makeStyles(() => ({
  card: {
    padding: "30px 30px",
    alignContent: "center"
  },
  image: {
    width: 260,
    height: 260,
  },
  contentMargin: {
    margin: "15px 0px"
  }
}))


const SearchTile: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <div >
        <Text as="h1" fontSize="25">条件で絞り込む</Text>
      </div>
      <Grid container justifyContent="center" spacing={1} className={classes.contentMargin}>
        <Grid item xs={6}>
          <CardActionArea>
            <Card className={classes.card}>
              <Link to={"/skill"}>
                <CardMedia
                  className={classes.image}
                  component="img"
                  image={SkillSearch}
                  alt="company image"
                />
              </Link>
              <CardContent>
                <Typography variant="body2">
                  スキルで探す
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={6}>
          <CardActionArea>
            <Card className={classes.card}>
              <Link to={"/search"} >
                <CardMedia
                  className={classes.image}
                  component="img"
                  image={Search}
                  alt="company image"
                />
              </Link>
              <CardContent>
                <Typography variant="body2">
                  全ての会社から探す
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </>
  );
}

export default SearchTile