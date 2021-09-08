import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { searchCompany } from "lib/api/company";
import { Text } from "@chakra-ui/layout";
import CompanyCard from "./company_tile/CompanyCard";
import { Company } from "interfaces";
import { List } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { RouteComponentProps } from 'react-router-dom'

type PageProps = {} & RouteComponentProps<{ page: string }>;

const CompanySearch: React.FC<PageProps> = props => {
  const [companies, setCompanies] = useState([])
  const history = useHistory()

  const getCompany = async (page: string) => {
    const res = await searchCompany(page)

    if (res.status === 200) {
      console.log(res.data);
      setCompanies(res.data)
    }
  }

  const pageTransion = (page: number) => {
    history.push(`/search/${page}`);
    getCompany(page.toString());
  }

  useEffect(() => {
    getCompany(props.match.params.page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Text as="h1" fontSize="25">全ての会社から探す</Text>
      <List>
        {companies.length !== 0 ? companies.map((company: Company) => <CompanyCard key={company.id} data={company}></CompanyCard>) : null}
      </List>
      <Pagination count={10} onChange={(_, page) => pageTransion(page)}></Pagination>
    </>
  )
}

export default CompanySearch