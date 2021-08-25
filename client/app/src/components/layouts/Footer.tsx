import React from "react"
import { Link, useHistory } from "react-router-dom"

import { makeStyles, Theme } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit"
  },
  linkBtn: {
    textTransform: "none"
  }
}))

const Footer: React.FC = () => {
  const classes = useStyles()
  const history = useHistory();

  const MyPageButton = () => {
    return <IconButton
      edge="start"
      className={classes.iconButton}
      color="inherit"
      onClick={() => history.push("/mypage")}
    >
      <PermIdentityIcon />
    </IconButton>
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            Programmer-Job-Hunting
          </Typography>
          <MyPageButton />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Footer