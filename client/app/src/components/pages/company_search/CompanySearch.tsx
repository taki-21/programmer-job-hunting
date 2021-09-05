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

  const getCompany = async () => {
    const res = await searchCompany(props.match.params.page)

    if (res.status === 200) {
      setCompanies(res.data)
    }
  }

  useEffect(() => {
    getCompany()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Text as="h1" fontSize="25">全ての会社から探す</Text>
      <List>
        {companies.map((company: Company) => <CompanyCard key={company.id} data={company}></CompanyCard>)}
      </List>
      <Pagination count={10} onChange={() => history.push(`/search/${Number(props.match.params.page) + 1}`)}></Pagination>
    </>
  )
}

export default CompanySearch