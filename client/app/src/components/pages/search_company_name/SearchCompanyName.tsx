import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom"
import { Text } from "@chakra-ui/layout";
import CompanyCard from "components/widgets/CompanyCard"
import { Company } from "interfaces";
import { List } from "@material-ui/core";
import { companyNameSearch } from "lib/api/company";
import VoidImage from "images/undraw_void_3ggu.png";


/// 会社名で検索する時に使用するページ
const SearchCompanyName: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const page: string = query.get('page') ?? "";
  const keyword: string = query.get('keyword') ?? "";
  const [companies, setCompanies] = useState([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const history = useHistory()

  const getCompany = async (keyword: string, page: string) => {

    companyNameSearch(keyword, page).then(
      res => {
        if (res.status === 200) {
          setCompanies(res.data.companies);
        }
      }
    )

  }

  useEffect(() => {
    getCompany(keyword, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (companies.length === 0) {
    return (
      <>
        <Text as="h3">
          お探しの会社は見つかりませんでした。
        </Text>
        <img
          src={VoidImage}
          alt="404 "
        />
      </>
    );
  }

  return (
    <>
      <Text as="h1" fontSize="25">{keyword}での検索結果</Text>
      <List>
        {companies.length !== 0 ? companies.map((company: Company) => <CompanyCard key={company.id} data={company}></CompanyCard>) : null}
      </List>
    </>
  )
}

export default SearchCompanyName