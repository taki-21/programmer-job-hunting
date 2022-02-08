import React, { useState, useEffect, createContext } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import CommonLayout from "components/CommonLayout"
import Home from "pages/home/Home"
import Registration from "pages/my_page/components/Registration"
import MyPage from "pages/my_page/MyPage"

import { getCurrentUser } from "lib/api/auth"
import { User } from "interfaces/index"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import CompanySearch from "pages/company_search/CompanySearch"
import CompanyDetail from "pages/detail/CompanyDetail"
import SignUp from "pages/my_page/components/SignUp"
import SkillSearch from "pages/skill_search/SkillSearch"
import NotFound from "pages/404/404"
import SearchCompanyName from "pages/search_company_name/SearchCompanyName"
import SkillSearchBox from "pages/skill_search/SkillSearchBox"
import ScrollToTop from "components/ScrollToTop"

// グローバルで扱う変数・関数
export const AuthContext = createContext({} as {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isSignedIn: boolean
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>
  currentUser: User | undefined
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>
})

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();

  const theme = extendTheme({
    //  whiteが背景色になるようなので書き換える
    colors: {
      //white: '#EDF2F7'
      white: "#FCFCFC"
    }
  })

  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser()

      if (res?.status === 200) {
        setIsSignedIn(true)
        setCurrentUser(res?.data)
      } else {
        console.log("No current user")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentUser()
  }, [setCurrentUser])

  return (
    <Router>
      <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
        <ChakraProvider theme={theme}>
          <CommonLayout>
            <ScrollToTop>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/mypage" component={MyPage} />
                <Route exact path="/signup" component={SignUp} />
                <Route path="/companies" component={CompanySearch} />
                <Route path="/detail/:companyId" component={CompanyDetail} />

                <Route exact path="/registration" component={Registration} />
                <Route exact path="/skill" component={SkillSearchBox} />

                <Route path="/search/companies" component={SearchCompanyName} />
                <Route exact path="/search/skill" component={SkillSearch} />
                <Route component={NotFound} />
              </Switch>
            </ScrollToTop>
          </CommonLayout>
        </ChakraProvider>
      </AuthContext.Provider>
    </Router>
  )
}

export default App
