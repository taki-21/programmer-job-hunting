import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { Text } from "@chakra-ui/layout";
import CompanyCard from "../../components/CompanyCard";
import { Company } from "interfaces";
import { List } from "@material-ui/core";
import { skillSearchCompany } from "lib/api/company";

const SkillSearch: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const page: string = query.get('page') ?? "";
  const lang: string = query.get('lang') ?? "";
  const [companies, setCompanies] = useState([]);

  const createHeaderTexts = () => {
    // クエリによる条件指定があった場合、条件の内容を表示する。
    let text: string = "";
    let positionText: string = "";
    if (lang !== "") {
      text += "言語：" + lang ;
    }
    return (
      <>
        <Text as="h6">{text}</Text>
        <Text as="h6">{positionText}</Text>
      </>
    );
  }

  useEffect(() => {
    skillSearchCompany(lang).then(
      res => {
        if (res.status === 200) {
          console.log(res.data);
          setCompanies(res.data.companies);
        }
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Text as="h1" fontSize="25">検索結果</Text>
      {createHeaderTexts()}
      <List>
        {
          companies.length !== 0
            ? companies.map((company: Company) =>
              <CompanyCard key={company.id} data={company}></CompanyCard>
            )
            : null
        }
      </List>

    </>
  )
}

export default SkillSearch