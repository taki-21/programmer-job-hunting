import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"
import { useHistory } from "react-router-dom"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { searchCompany } from "lib/api/company";
import { Text } from "@chakra-ui/layout";
import CompanyCard from "../../components/CompanyCard";
import { Company } from "interfaces";
import { CircularProgress, Grid, List } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) => ({
  pagenation_center: {
    display: 'flex',
    justifyContent: 'center'
  },
  loading: {
    height: '100vh',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '100px'
  },
  centering: {
    textAlign: 'center',
  },
  in: {
    display: 'inline-block',
  }
}))

/// 「全ての会社から探す」ページ。
/// 引数としてpageを使用する
/// TODO: APIから全ページ数を取得し、ページ数を可変にする
///     - 取得できなかった場合のエラー処理 
const CompanySearch: React.FC = () => {
  const classes = useStyles()
  const [page, setPage] = useState(1)
  const [companies, setCompanies] = useState<Company[]>([])
  const history = useHistory()


  useEffect(() => {
    async function getCompanies() {
      const response = await searchCompany(page);
      if (response.status === 200) {
        history.push(`/companies?page=${page}`)
        setCompanies(response.data.companies)
      }
    }
    getCompanies();
  }, [page, history]);

  return (
    <>
      <Grid container>
        <Grid xs={false} md={4}>

        </Grid>
        <Grid item md>
          <Text as="h1" fontSize="25">全ての会社から探す</Text>
          <List className={classes.centering}>
            {
              companies.length !== 0
                ? companies.map(
                  (company: Company) =>
                    <CompanyCard
                      key={company.id}
                      data={company}
                    />)
                :
                <div className={classes.loading}>
                  <CircularProgress />
                </div>
            }
          </List>
          <div className={classes.centering}>
            <Pagination
              count={10}
              onChange={(_, page) => setPage(page)}
              className={classes.in}
            />
          </div>

        </Grid>
      </Grid>
    </>

  )
}

export default CompanySearch