import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react"
import { reccomendCompany } from "lib/api/company";
import CompanyTile from "./CompanyMiniTile";
import { Company } from "interfaces";


const ReccomendCompanies: React.FC = () => {
  const [companies, setCompanies] = useState([])

  const getCompany = async () => {
    const res = await reccomendCompany()

    if (res.status === 200) {
      setCompanies(res.data)
    }
  }

  useEffect(() => {
    getCompany()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (<Flex>
    {companies.map((item: Company) => <CompanyTile data={item} key={item.id}></CompanyTile>)
    }
  </Flex>)
}

export default ReccomendCompanies