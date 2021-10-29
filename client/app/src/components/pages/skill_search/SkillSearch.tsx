import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { Text } from "@chakra-ui/layout";
import CompanyCard from "../../widgets/CompanyCard";
import { Company } from "interfaces";
import { List } from "@material-ui/core";
import { skillSearchCompany } from "lib/api/company";

const SkillSearch: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const page: string = query.get('page') ?? "";
  const lang: string = query.get('lang') ?? "";
  const framework: string = query.get('framework') ?? "";
  const positions: string[] = query.getAll('positions') ?? [""]
  const [companies, setCompanies] = useState([]);

  const createHeaderTexts = () => {
    // クエリによる条件指定があった場合、条件の内容を表示する。
    let text: string = "";
    let positionText: string = "";
    if (lang !== "") {
      text += "言語：" + lang + ",  ";
    }
    if (framework !== "") {
      text += "フレームワーク：" + framework;
    }

    if (positions.length !== 1) {
      positionText += "職種："
      positions.forEach((val, index) => positionText += val + ",")
    }
    // もっと綺麗な方法ありそう
    positionText = positionText.slice(0, positionText.length - 1);

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