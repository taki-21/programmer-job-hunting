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
  const [page, setPage] = useState(query.get('page') ?? "")
  const [keyword, setKeyword] = useState(query.get('keyword') ?? "");
  const [companies, setCompanies] = useState([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const history = useHistory()

  useEffect(() => {
    ///  現在の　backではpage 
    async function getCompanies() {
      await companyNameSearch(keyword, page).then(
        response => {
          if (response.status === 200) {
            setCompanies(response.data.companies);
          }
        }
      );
    }
    getCompanies();
  }, [keyword, page])


  if (companies.length === 0) {
    return (
      <>
        <Text as="h3">
          お探しの会社は見つかりませんでした。
        </Text>
        <img
          src={VoidImage}
          alt="404 "
          width={500}
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