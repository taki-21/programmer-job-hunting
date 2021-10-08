import React, { useState, useEffect } from "react";
import { reccomendCompany } from "lib/api/company";
import { Text } from "@chakra-ui/layout";
import CompanyTile from "./CompanyMiniTile";
import { Company } from "interfaces";
import { Grid } from "@material-ui/core";


const ReccomendCompanies: React.FC = () => {
  const [companies, setCompanies] = useState([])

  /// apiからトップに表示する会社を取得する
  useEffect(() => {
    reccomendCompany().then(
      res => {
        if (res.status === 200) {
          setCompanies(res.data.companies);
          console.log(companies);
          console.log(res.data.companies);
        }
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div style={{ width: '100%' }}>
      <Text as="h1" fontSize="25">おすすめの企業</Text>

      <Grid container>
        {
          companies.map(
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