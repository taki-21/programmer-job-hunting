// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { reccomendCompany } from "lib/api/company";
import { Text } from "@chakra-ui/layout";
import CompanyTile from "./CompanyMiniTile";
import { Company } from "interfaces";
import { Grid } from "@material-ui/core";


const ReccomendCompanies: React.FC = () => {
  //const [companies, setCompanies] = useState([])

  let dummyData: Company[] = [
    {
      id: 1,
      companyName: "Speee",
    },
    {
      id: 2,
      companyName: "freeee",
    },
    {
      id: 3,
      companyName: "アカツキ",
    },
    {
      id: 4,
      companyName: "ラクーン",
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
      <Text as="h1" fontSize="25">おすすめの企業</Text>
      <Grid container>
        {
          dummyData.map(
            (item: Company) =>
              <Grid item key={item.id}>
                <CompanyTile data={item} />
              </Grid>
          )
        }
      </Grid>
    </div >

  )
}

export default ReccomendCompanies