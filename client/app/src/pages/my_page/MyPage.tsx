import React, { useContext } from "react"
import { AuthContext } from "App"
import SignIn from "pages/my_page/components/SignIn"
import SignOut from "./components/SignOut"
import Registration from "./components/Registration"


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