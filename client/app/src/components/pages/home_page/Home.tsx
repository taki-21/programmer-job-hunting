import React from "react"
import ReccomendCompanies from "./recommend_companies/ReccomendCompanies"
import SearchCompanyBox from "./search_company_box/SearchCompanyBox"

// とりあえず認証済みユーザーの名前やメールアドレスを表示
const Home: React.FC = () => {

  return (
    <>
      <ReccomendCompanies>
      </ReccomendCompanies>
      <SearchCompanyBox>
      </SearchCompanyBox>
    </>
  )
}

export default Home