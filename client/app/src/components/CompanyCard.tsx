import { Typography, ListItem, Card, Grid, Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { BriefCompany } from '../interfaces/index';

type Props = {
  data: BriefCompany;
};

const useStyles = makeStyles((theme: Theme) => ({
  cardContentText: {
    padding: "5px 20px",
  },
  card: {
    padding: theme.spacing(2),
    width: 500,
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
    <ListItem alignItems="flex-start" key={props.data.id}>
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item>
            <Box className={classes.image}>
              <img src={props.data.companyImage} alt={props.data.companyImage} />
            </Box>
          </Grid>

          <Grid item xs={12} sm container>
            <Grid item xs>
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
        </Grid>
      </Card>
    </ListItem>
  );
};

export default CompanyCard;
