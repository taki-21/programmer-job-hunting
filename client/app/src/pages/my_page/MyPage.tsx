import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "App"
import SignIn from "pages/my_page/components/SignIn"
import SignOut from "./components/SignOut"
import Registration from "./components/Registration"
import { Grid, makeStyles } from "@material-ui/core"


const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const useWindowDimensions = () => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return windowDimensions;
}


// マイページ
const MyPage: React.FC = () => {
  const { currentUser, isSignedIn } = useContext(AuthContext)
  const { width, height } = useWindowDimensions();

  // スマホ用の画面
  if (width < 700) {
    return (
      <>
        <SignOut />
        <Registration />
      </>
    );
  }
  return (
    <>
      {
        isSignedIn && currentUser ? (
          <Grid container>
            <Grid item xs={12}>
              <SignOut />
              <Registration />
            </Grid>
          </Grid>
        ) : (
          <SignIn>
          </SignIn>
        )
      }
    </>
  )
}

export default MyPage