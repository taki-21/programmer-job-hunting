import React, { useContext } from "react"
import { AuthContext } from "App"
import { Button } from "@chakra-ui/react"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay
} from "@chakra-ui/react"
import SignIn from "components/pages/my_page/auth/SignIn"
import Cookies from "js-cookie"

import { signOut } from "lib/api/auth"


// マイページ
const MyPage: React.FC = () => {
  const { currentUser, isSignedIn, setIsSignedIn } = useContext(AuthContext)
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
      {
        isSignedIn && currentUser ? (
          <>
            <h2>メールアドレス: {currentUser?.email}</h2>
            <h2>名前: {currentUser?.name}</h2>
            <Button
              variant="outline"
              onClick={handleClickOpen}
            >ログアウト</Button>

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
        ) : (
          <SignIn>
          </SignIn>
        )
      }
    </>
  )
}

export default MyPage