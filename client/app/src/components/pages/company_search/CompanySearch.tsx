import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { searchCompany } from "lib/api/company";
import { Text } from "@chakra-ui/layout";
import CompanyCard from "../../widgets/CompanyCard";
import { Company } from "interfaces";
import { List } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const CompanySearch: React.FC = () => {
  const query = new URLSearchParams(useLocation().search);
  const page: String = query.get('page') ?? "";
  const [companies, setCompanies] = useState([])
  const history = useHistory()

  const getCompany = async (page: String) => {
    /*
    const res = await searchCompany(page)

    if (res.status === 200) {
      console.log(res.data);
      setCompanies(res.data)
    }*/
    var dummyData: any = [];
    for (var i = 0; i < 10; i++) {
      var dummyNum = page + i.toString();
      dummyData.push({
        "id": i,
        "companyName": "dummy" + dummyNum,
        "companyOverview": "dummy" + dummyNum + "カンパニーは自社アプリケーション開発をメインとした会社です。時代に先駆けて新しい価値をユーザーに提供することを会社の理念としています。とてもアットホームな職場環境で、離職率も非常に低くなっております。",
        "companyNumOfEmp": "dummy" + dummyNum,
      });
    }

    setCompanies(dummyData);
  }

  const pageTransion = (page: String) => {
    history.push(`/companies?page=${page}`);
    getCompany(page.toString());
  }

  useEffect(() => {
    getCompany(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Text as="h1" fontSize="25">全ての会社から探す</Text>
      <List>
        {companies.length !== 0 ? companies.map((company: Company) => <CompanyCard key={company.id} data={company}></CompanyCard>) : null}
      </List>
      <Pagination count={10} onChange={(_, page) => pageTransion(page.toString())}></Pagination>
    </>
  )
}

export default CompanySearch