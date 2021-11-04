import React, { useContext } from "react"
import { AuthContext } from "App"
import SignIn from "pages/my_page/auth/SignIn"
import SignOut from "./auth/SignOut"
import Registration from "./registration/Registration"


// マイページ
const MyPage: React.FC = () => {
  const { currentUser, isSignedIn } = useContext(AuthContext)

  return (
    <>
      {
        isSignedIn && currentUser ? (
          <>
            <SignOut>
            </SignOut>
            <Registration>
            </Registration>
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