import React from "react"

import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"

const useStyles = makeStyles(() => ({
  container: {
    marginBottom: "3rem"
  },
  body: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  footer:{
    marginTop: "auto"
  }
}));

interface CommonLayoutProps {
  children: React.ReactElement
}

// 全てのページで共通となるレイアウト
const CommonLayout = ({ children }: CommonLayoutProps) => {
  const classes = useStyles()

  return (
    <body>
      <div className={classes.body}>
        <Header/>
        <Banner></Banner>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container justifyContent="center">
            <Grid item>
              {children}
            </Grid>
          </Grid>
        </Container>
        <div className={classes.footer}>
        <Footer></Footer>
        </div>
      </div>
    </body>
  )
}

export default CommonLayout