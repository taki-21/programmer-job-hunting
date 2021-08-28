import React, { useState, useEffect } from "react";
import { searchCompany } from "lib/api/company";
import { Text } from "@chakra-ui/layout";

type Company = {
  id: number;
  companyName: string;
  companyOverview: string;
}

const CompanySearch: React.FC = () => {
  const [companies, setCompanies] = useState([])
  const [pageIndex, setPageIndex] = useState(1)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changePageIndex = (newPage: number) => {

    if (newPage < pageIndex && pageIndex !== 1) {
      setPageIndex(pageIndex - 1)
    } else {
      setPageIndex(pageIndex + 1)
    }
  }

  const getCompany = async () => {
    const res = await searchCompany(pageIndex)

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
      <Text as="h1">全ての会社から探す</Text>
      {companies.map((company: Company) => <p key={company.id}>{company.companyName}</p>)}
    </>
  )
}

export default CompanySearch