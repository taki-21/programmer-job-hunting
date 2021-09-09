import React, { useContext } from "react";
import { Button } from "@chakra-ui/react"
import { Card, CardContent, Typography } from "@material-ui/core";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from "@chakra-ui/react"
import { AuthContext } from "App"


import Cookies from "js-cookie"
import { makeStyles, Theme } from "@material-ui/core/styles"
import { signOut } from "lib/api/auth"

const useStyles = makeStyles((theme: Theme) => ({
  cardContentText: {
    padding: "5px 20px"
  },
  card: {
    padding: theme.spacing(2),
    maxWidth: 900,
    margin: "15px 0px"
  },
  logoutButton: {
    textAlign: "center",
    margin: "15px 0px"
  }
}))

// 一部chakra-ui 使ってみた
const SignOut: React.FC = () => {
  const classes = useStyles()
  const { currentUser, setIsSignedIn } = useContext(AuthContext)
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = () => setIsOpen(false)
  const cancelRef = React.useRef<HTMLButtonElement>(null)


  const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await signOut()

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        setIsSignedIn(false)
        //histroy.push("/signin")
        handleClose()

        console.log("Succeeded in sign out")
      } else {
        console.log("Failed in sign out")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <>
      <Typography
        variant="h5"
      >ユーザー情報</Typography>
      <Card className={classes.card}>
        <CardContent className={classes.cardContentText}>ログインしています</CardContent>
        <CardContent>
          <h2>メールアドレス: {currentUser?.email}</h2>
          <h2>名前: {currentUser?.name}</h2>
          <div className={classes.logoutButton}>
            <Button
              variant="outline"
              onClick={handleClickOpen}
            >ログアウト
            </Button>
          </div>

        </CardContent>
      </Card>



      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              確認
            </AlertDialogHeader>

            <AlertDialogBody>
              本当にサインアウトしますか？
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                戻る
              </Button>
              <Button colorScheme="red" onClick={handleSignOut} ml={3}>
                サインアウト
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default SignOut