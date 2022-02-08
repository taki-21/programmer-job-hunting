import React, { useState, useEffect } from "react";
import { reccomendCompany } from "lib/api/company";
import { Text } from "@chakra-ui/layout";
import CompanyTile from "./CompanyMiniTile";
import { Company } from "interfaces";

const ReccomendCompanies: React.FC = () => {
  const [companies, setCompanies] = useState([])

  /// apiからトップに表示する会社を取得する
  useEffect(() => {
    reccomendCompany().then(
      res => {
        if (res.status === 200) {
          setCompanies(res.data);
        }
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Text as="h1" fontSize="25">おすすめの企業</Text>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {
          companies.map(
            (item: Company) =>
              <CompanyTile data={item} />
          )
        }
      </div>

    </>

  )

}

export default ReccomendCompanies
