import { Typography, ListItem, Card, Grid, Box } from "@material-ui/core";
import { Company } from "interfaces";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles"
import DummyLogo from './Icon-512.png';


type Props = {
  data: Company
}

const useStyles = makeStyles((theme: Theme) => ({
  cardContentText: {
    padding: "5px 20px"
  },
  card: {
    padding: theme.spacing(2),
    maxWidth: 650,
    minWidth: 440,
    minHeight: 100,
  },
  image: {
    width: "75px",
    height: "75px",
    margin: "10px 15px"
  },
  companyOverviewText: {
    display: "block",
    component: "span",
    variant: "body2",
    color: "textPrimary"
  },
  companyNameText: {
    display: "block",
    fontSize: "23px"
  }
}))

const CompanyCard: React.FC<Props> = (props) => {
  const classes = useStyles()
  let companyOverview: String = props.data.companyOverview;
  // テキストの長さを制限
  if (companyOverview.length > 80) {
    companyOverview = companyOverview.slice(0, 80);
    companyOverview += "...";
  }
  return (
    <ListItem alignItems="flex-start">
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item>
            <Box className={classes.image}>
              <img src={DummyLogo} alt="dummy logo" />
            </Box>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs>
              <Typography
                variant="body2"
                color="textSecondary"
              >
                広告・マスコミ | テレビ・ラジオ
              </Typography>
              <Link
                to={`/detail/${props.data.id}`}
                className={classes.companyNameText}
              >{props.data.companyName}</Link>
              <Typography
                className={classes.companyOverviewText}
              >
                {companyOverview}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </ListItem >
  )
}

export default CompanyCard