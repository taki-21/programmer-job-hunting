import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react"
import { reccomendCompany } from "lib/api/company";
import CompanyTile from "./CompanyTile";


const ReccomendCompanies: React.FC = () => {
  const [companies, setCompanies] = useState([])

  const getCompany = async () => {
    const res = await reccomendCompany()

    if (res.status === 200) {
      setCompanies(res.data)
    }
    console.log(companies)
  }

  useEffect(() => {
    getCompany()
  }, [])

  return (<Flex>
    {companies.map((item: any) => <CompanyTile data={item} key={item.id}></CompanyTile>)
    }
  </Flex>)
}

export default ReccomendCompanies