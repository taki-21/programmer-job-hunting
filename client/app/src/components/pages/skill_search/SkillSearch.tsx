import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import { Text } from "@chakra-ui/layout";
import CompanyCard from "../../widgets/CompanyCard";
import { Company } from "interfaces";
import { List } from "@material-ui/core";

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

    if (positions.length !== 0) {
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

  const getCompany = async (page: string) => {

    /*
    const res = await searchCompany(page)

    if (res.status === 200) {
      console.log(res.data);
      setCompanies(res.data)
    }*/
    var dummyData: any = [];
    for (var i = 0; i < 10; i++) {
      var dummyNum = lang + i.toString();
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
    getCompany(page)
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