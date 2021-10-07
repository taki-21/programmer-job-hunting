import React, { useState, useEffect } from "react";
import { reccomendCompany } from "lib/api/company";
import { Text } from "@chakra-ui/layout";
import CompanyTile from "./CompanyMiniTile";
import { Company } from "interfaces";
import { Grid } from "@material-ui/core";


const ReccomendCompanies: React.FC = () => {
  const [companies, setCompanies] = useState([])

  /// apiからトップに表示する会社を取得する
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

  if (companies.length > 0) {
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

  /// データを取得できなかった場合は何も返さない
  return <></>


}

export default ReccomendCompanies