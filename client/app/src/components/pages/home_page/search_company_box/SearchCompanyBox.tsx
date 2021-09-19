import React from "react";
import { Link } from "react-router-dom"

import { makeStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import { Button, Grid } from "@material-ui/core";

interface SimpleCompany {
  companyId: number,
  companyName: string
}

// APIで取得するデータ
let companyNameList: SimpleCompany[] = [
  {
    companyId: 1,
    companyName: "Speee"
  },
  {
    companyId: 2,
    companyName: "BCG"
  },
  {
    companyId: 3,
    companyName: "アクセンチュア"
  },
  {
    companyId: 4,
    companyName: "フィーチャー"
  },
  {
    companyId: 5,
    companyName: "ソウゾウ"
  },
  {
    companyId: 6,
    companyName: "News Picks"
  },
  {
    companyId: 7,
    companyName: "AWS"
  },
  {
    companyId: 8,
    companyName: "Sky"
  },
];

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: 500,
    margin: "15px 0px",
  },
  cardHeader: {
    background: "#063052",
    color: "#FFFFFF",
  },
  content: {
    margin: "15px 15px"
  },
  linkText: {
    color: "#41B3DB",
  }
}))


const SearchCompanyBox: React.FC = () => {
  const classes = useStyles()

  const companyNameLink = (data: SimpleCompany) => {
    return (
      <li>
        <Link to={`/detail/${data.companyId}`} target="_blank" rel="noopener" className={classes.linkText}>
          {data.companyName}
        </Link>
      </li>
    );
  }

  const companyNameLinkList = (companyList: SimpleCompany[]) => {
    // APIからは偶数個のデータが返却される想定
    let list1: SimpleCompany[] = companyList.slice(0, Math.floor(companyList.length / 2));
    let list2: SimpleCompany[] = companyList.slice(Math.floor(companyList.length / 2), companyList.length);

    return (
      <Grid container className={classes.content}>
        <Grid item xs={6}>
          <ul>
            {list1.map((item: SimpleCompany) => companyNameLink(item))}
          </ul>
        </Grid>
        <Grid item xs={6}>
          <ul>
            {list2.map((item: SimpleCompany) => companyNameLink(item))}
          </ul>
        </Grid>
      </Grid>
    );
  }


  return (
    <>
      <Card className={classes.card}>
        <CardHeader className={classes.cardHeader} title="厳選された企業から探す" titleTypographyProps={{ variant: "body1" }}>
        </CardHeader>
        <CardContent className={classes.content}>
          <TextField id="filled-basic" label="企業名で探す" variant="outlined" fullWidth />
          {companyNameLinkList(companyNameList)}
          <Grid container alignItems="center" justifyContent="center">
            <Button variant="contained" color="primary">検索</Button>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default SearchCompanyBox