import React, { useContext, useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Button, TextField, Divider, Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'App';
import Cookies from 'js-cookie';
import { signIn } from 'lib/api/auth';
import { SignInData } from 'interfaces';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(6)
  },
  submitBtn: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    textTransform: "none"
  },
  header: {
    textAlign: "center"
  },
  card: {
    padding: theme.spacing(2),
    width: 500,
    margin: "15px 0px"
  },
  box: {
    marginTop: "2rem"
  },
  link: {
    textDecoration: "none"
  },
  divider: {
    marginTop: "2"
  }
}))

export function SimpleDialog(props: { open: boolean, onBackdropTapped: Function }) {
  const { open, onBackdropTapped } = props;
  const classes = useStyles()
  const history = useHistory()

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const data: SignInData = {
      email: email,
      password: password
    }

    try {
      const res = await signIn(data)

      if (res.status === 200) {
        // 成功した場合はCookieに各値を格納
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsSignedIn(true)
        setCurrentUser(res.data.data)

        history.push("/")

        console.log("Signed in successfully!")
      } else {
        setAlertMessageOpen(true)
      }
    } catch (err) {
      console.log(err)
      setAlertMessageOpen(true)
    }
  }

  const handleClose = () => {
    onBackdropTapped();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth='xs'
    >
      <Box p={3}>
        <DialogTitle id="simple-dialog-title">ログイン</DialogTitle>
        <form noValidate autoComplete="off">
          <TextField
            variant="outlined"
            required
            fullWidth
            label="メールアドレス"
            value={email}
            margin="dense"
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            label="パスワード"
            type="password"
            placeholder="6文字以上"
            value={password}
            margin="dense"
            autoComplete="current-password"
            onChange={event => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            disabled={!email || !password ? true : false}
            className={classes.submitBtn}
            onClick={handleSubmit}
            fullWidth={true}
          >
            ログイン
          </Button>
        </form>
        <Divider className={classes.divider} />
        <Button
          variant='outlined'
          color='primary'
          fullWidth={true}
        >
          新規会員登録（無料）はこちら
        </Button>
      </Box>
    </Dialog>
  );
}
