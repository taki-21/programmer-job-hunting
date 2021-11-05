import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import { Button, Grid } from "@material-ui/core";
import { Text } from "@chakra-ui/layout";

// APIで取得するデータ
let companyNameList: string[] = [
  "Speee",
  "BCG",
  "アクセンチュア",
  "フィーチャー",
  "ソウゾウ",
  "News Picks",
  "AWS",
  "Sky",
];

const useStyles = makeStyles(() => ({
  card: {
    width: 650,
    margin: "15px 0px",
    alignContent: "center"
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
  const [keyword, setKeyword] = useState("")
  const classes = useStyles()
  const history = useHistory()

  const companyNameLink = (companyName: string) => {
    return (
      <li key={companyName}>
        <Link
          to={`/search/companies?keyword=${companyName}`}
          target="_blank" rel="noopener"
          className={classes.linkText}
        >
          {companyName}
        </Link>
      </li>
    );
  }

  const companyNameLinkList = (companyList: string[]) => {
    // APIからは偶数個のデータが返却される想定
    let list1: string[] = companyList.slice(0, Math.floor(companyList.length / 2));
    let list2: string[] = companyList.slice(Math.floor(companyList.length / 2), companyList.length);

    return (
      <Grid container className={classes.content}>
        <Grid item xs={6} >
          <ul>
            {list1.map((item: string) => companyNameLink(item))}
          </ul>
        </Grid>
        <Grid item xs={6} >
          <ul>
            {list2.map((item: string) => companyNameLink(item))}
          </ul>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Text as="h1" fontSize="25">全ての会社から探す</Text>
      <Grid container justifyContent="center">
        <Card className={classes.card}>
          <CardHeader className={classes.cardHeader} title="厳選された企業を掲載しています" titleTypographyProps={{ variant: "body1" }}>
          </CardHeader>
          <CardContent className={classes.content}>
            <TextField
              id="filled-basic"
              label="企業名で探す"
              variant="outlined"
              fullWidth
              onChange={(event) => setKeyword(event.target.value)}
            />
            {companyNameLinkList(companyNameList)}
            <Grid container alignItems="center" justifyContent="center">
              <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/search/companies?keyword=" + keyword)}
              >検索</Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default SearchCompanyBox