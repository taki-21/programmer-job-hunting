import React from "react"
import ReccomendCompanies from "./recommend_companies/ReccomendCompanies"

// とりあえず認証済みユーザーの名前やメールアドレスを表示
const Home: React.FC = () => {

  return (
    <>
      <ReccomendCompanies>
      </ReccomendCompanies>
    </>
  )
}

export default Home