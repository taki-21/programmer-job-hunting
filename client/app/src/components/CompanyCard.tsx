import { Typography, ListItem, Card, Grid, Box, CardActionArea } from "@material-ui/core";
import { Company } from "interfaces";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import DummyLogo from "images/Icon-512.png";

type Props = {
  data: Company;
};

const useStyles = makeStyles((theme: Theme) => ({
  cardContentText: {
    padding: "5px 20px",
  },
  card: {
    minWidth: "500px"
  },
  cardArea: {
    padding: theme.spacing(1),
  },
  image: {
    width: "75px",
    height: "75px",
    margin: "10px 15px",
  },
  companyOverviewText: {
    display: "block",
    component: "span",
    variant: "body2",
    color: "textPrimary",
  },
  companyNameText: {
    display: "block",
    fontSize: "23px",
  },
  in: {
    display: "inline-block"
  }
}));

const CompanyCard: React.FC<Props> = (props) => {
  const classes = useStyles();
  let companyOverview: String = props.data.companyOverview ?? "";
  // テキストの長さを制限
  if (companyOverview.length > 50) {
    companyOverview = companyOverview.slice(0, 50);
    companyOverview += "...";
  }
  return (
    <ListItem
      key={props.data.id}
      className={classes.in}
    >
      <Card className={classes.card}>
        <CardActionArea className={classes.card}>
          <Grid container spacing={2}>
            <Grid item>
              <Box className={classes.image}>
                <img src={DummyLogo} alt="dummy logo" />
              </Box>
            </Grid>

            <Grid item xs={12} sm>
              <Link
                to={`/detail/${props.data.id}`}
                className={classes.companyNameText}
              >
                {props.data.companyName}
              </Link>
              <Typography className={classes.companyOverviewText}>
                {companyOverview}
              </Typography>
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    </ListItem>
  );
};

export default CompanyCard;
