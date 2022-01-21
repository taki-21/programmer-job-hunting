import React, { useState, useEffect, createContext } from "react";
import { RouteComponentProps } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';

import { companyDetail } from "lib/api/company";
import { Company } from "interfaces";
import CompanyHeader from "./components/CompanyHeader";

type PageProps = {} & RouteComponentProps<{ companyId: string }>;

export const CompanyContext = createContext<Company | null>(null);

const CompanyDetail: React.FC<PageProps> = props => {
  const [detailData, setDetailData] = useState<Company>()
  const [isSuccess, setIsSuccess] = useState(true);

  const getDetailData = async () => {
    try {
      const res = await companyDetail(props.match.params.companyId);

      if (res.status === 200) {
        setDetailData(res.data);
      }
    } catch (error) {
      setIsSuccess(false);
    }

  }

  useEffect(() => {
    getDetailData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    isSuccess && detailData !== undefined ?
      <Grid container>
        <Grid item zeroMinWidth >
          <CompanyContext.Provider value={detailData}>
            <CompanyHeader />
          </CompanyContext.Provider>
        </Grid>
      </Grid>
      : <></>
  )
}

export default CompanyDetail