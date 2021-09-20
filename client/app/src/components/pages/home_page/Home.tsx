import { Divider } from "@material-ui/core"
import React from "react"
import ReccomendCompanies from "./recommend_companies/ReccomendCompanies"
import SearchCompanyBox from "./search_company_box/SearchCompanyBox"
import { makeStyles } from "@material-ui/core/styles"
import SearchTile from "./search_tile/SearchTile"

const useStyles = makeStyles(() => ({
  contentDivider: {
    margin: "15px 0px",
    variant: "fullWidth"
  },
}))


// とりあえず認証済みユーザーの名前やメールアドレスを表示
const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Divider className={classes.contentDivider} />
      <ReccomendCompanies>
      </ReccomendCompanies>
      <Divider className={classes.contentDivider} />
      <SearchCompanyBox>
      </SearchCompanyBox>
      <Divider className={classes.contentDivider} />
      <SearchTile></SearchTile>
      <Divider className={classes.contentDivider} />
    </>
  )
}

export default Home