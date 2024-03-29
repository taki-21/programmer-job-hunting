import React, { useState, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"
import { useHistory } from "react-router-dom"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { searchCompany } from "lib/api/company";
import { Text } from "@chakra-ui/layout";
import CompanyCard from "../../components/CompanyCard";
import { Company } from "interfaces";
import { List } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { BriefCompany } from '../../interfaces/index';

const useStyles = makeStyles((theme: Theme) => ({

  pagenation_center: {
    display: 'flex',
    justifyContent: 'center'
  },
}))

/// 「全ての会社から探す」ページ。
/// 引数としてpageを使用する
/// TODO: APIから全ページ数を取得し、ページ数を可変にする
///     - 取得できなかった場合のエラー処理
const CompanySearch: React.FC = () => {
  const classes = useStyles()
  const [page, setPage] = useState(1)
  const [companies, setCompanies] = useState<BriefCompany[]>([])
  const history = useHistory()


  useEffect(() => {
    async function getCompanies() {
      const response = await searchCompany(page);
      if (response.status === 200) {
        history.push(`/companies?page=${page}`)
        setCompanies(response.data)
      }
    }
    getCompanies();
  }, [page, history]);

  return (
    <>
      <Text as="h1" fontSize="25">全ての会社から探す</Text>
      <List>
        {companies.length !== 0 ? companies.map((company: BriefCompany) => <CompanyCard key={company.id} data={company} />) : null}
      </List>
      <div className={classes.pagenation_center}>
        <Pagination count={10} onChange={(_, page) => setPage(page)} />
      </div>
    </>
  )
}

export default CompanySearch
