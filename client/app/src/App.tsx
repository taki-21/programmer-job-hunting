import React, { useState, useEffect, createContext } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import CommonLayout from "components/layouts/CommonLayout"
import Home from "components/pages/home_page/Home"
import Registration from "components/pages/my_page/registration/Registration"
import MyPage from "components/pages/my_page/MyPage"

import { getCurrentUser } from "lib/api/auth"
import { User } from "interfaces/index"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import CompanySearch from "components/pages/company_search/CompanySearch"
import CompanyDetail from "components/pages/company_detail/CompanyDetail"
import SignUp from "components/pages/my_page/auth/SignUp"
import SkillSearch from "components/pages/skill_search/SkillSearch"
import NotFound from "components/pages/404/404"
import SearchCompanyName from "components/pages/search_company_name/SearchCompanyName"

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
  const [loading, setLoading] = useState<boolean>(true)
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<User | undefined>()

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
      console.log(res)

      if (res?.status === 200) {
        setIsSignedIn(true)
        setCurrentUser(res?.data.currentUser)
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/mypage" component={MyPage} />
              <Route exact path="/signup" component={SignUp} />
              <Route path="/companies" component={CompanySearch} />
              <Route path="/detail/:companyId" component={CompanyDetail} />
              <Route path="/registration" component={Registration} />
              <Route path="/skill" component={SkillSearch} />

              <Route path="/search/companies" component={SearchCompanyName} />
              <Route component={NotFound} />
            </Switch>
          </CommonLayout>
        </ChakraProvider>
      </AuthContext.Provider>
    </Router>
  )
}

export default App