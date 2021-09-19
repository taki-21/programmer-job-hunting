import React, { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react"
import { reccomendCompany } from "lib/api/company";
import CompanyTile from "./CompanyMiniTile";
import { Company } from "interfaces";
import { Button, Grid } from "@material-ui/core";


const ReccomendCompanies: React.FC = () => {
  const [companies, setCompanies] = useState([])

  let dummyData: Company[] = [
    {
      id: 1,
      companyName: "Speee",
    },
    {
      id: 2,
      companyName: "Speee",
    },
    {
      id: 3,
      companyName: "Speee",
    },
    {
      id: 4,
      companyName: "Speee",
    },
    {
      id: 5,
      companyName: "Speee",
    },
  ];

  const getCompany = async () => {
    /*const res = await reccomendCompany()

    if (res.status === 200) {
      setCompanies(res.data)
    }*/
  }

  useEffect(() => {
    getCompany()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <Grid container>
        {
          dummyData.map((item: Company) => <Grid item><CompanyTile data={item} key={item.id} /></Grid>)
        }
      </Grid>
    </div >

  )
}

export default ReccomendCompanies