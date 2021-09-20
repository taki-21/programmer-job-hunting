import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { Text } from "@chakra-ui/layout";
import CompanyCard from "components/widgets/CompanyCard"
import { Company } from "interfaces";
import { List } from "@material-ui/core";

const SearchCompanyName: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const keyword: String = query.get('keyword') ?? "";
  const [companies, setCompanies] = useState([])

  const getCompany = async () => {
    // TODO: keywordの検索結果を取得

    var dummyData: any = [];
    for (var i = 0; i < 10; i++) {
      var dummyNum = i;
      dummyData.push({
        "id": i,
        "companyName": "dummy" + dummyNum,
        "companyOverview": "dummy" + dummyNum + "カンパニーは自社アプリケーション開発をメインとした会社です。時代に先駆けて新しい価値をユーザーに提供することを会社の理念としています。とてもアットホームな職場環境で、離職率も非常に低くなっております。",
        "companyNumOfEmp": "dummy" + dummyNum,
      });
    }

    setCompanies(dummyData);
  }

  useEffect(() => {
    getCompany()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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