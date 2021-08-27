import React, { useState, useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react"
import axios from 'axios';
import client from "lib/api/client";
import { reccomendCompany } from "lib/api/company";

const CompanyTile: React.FC = (props) => {
  const property = {
    imageUrl: "",
    imageAlt: "company image",
    company_name: "freeee",
  }



  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="White">

      <Box p="6">
        <Box
          as="h3"
          fontWeight="semibold"
          lineHeight="tight"
        >
          {property.company_name}
        </Box>
      </Box>
    </Box>
  )
}

interface Company {
  id: number,
  companyName: string,
  companyAddress: string,
  companyOverview: string,
  companyNumOfEmp: string
}

const ReccomendCompanies: React.FC = () => {
  const [companies, setCompanies] = useState([])

  const getCompany = async () => {
    const res = await reccomendCompany()
    console.log(res.data[0])
    if (res.status === 200) {
      setCompanies(res.data)
    }
  }

  useEffect(() => {
    getCompany()
  }, [])



  return (
    <>
      {companies.map((item) => <p>item</p>)}
    </>
  )
}

export default ReccomendCompanies