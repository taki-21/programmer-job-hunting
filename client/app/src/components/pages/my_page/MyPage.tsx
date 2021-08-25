import React, { useContext } from "react"
import { AuthContext } from "App"
import SignIn from "components/pages/SignIn"

// マイページ
const MyPage: React.FC = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext)

  return (
    <>
      {
        isSignedIn && currentUser ? (
          <>
            <h2>メールアドレス: {currentUser?.email}</h2>
            <h2>名前: {currentUser?.name}</h2>
          </>
        ) : (
          <>
            <p>この機能を使うにはログインが必要です。</p>
            <SignIn>
            </SignIn>
          </>
        )
      }
    </>
  )
}

export default MyPage