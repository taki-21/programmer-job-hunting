import React, { useState, useEffect, useContext, createContext } from "react";
import { Typography } from "@material-ui/core";
import { companyDetail } from "lib/api/company";
import { RouteComponentProps } from 'react-router-dom'
import NotFound from "../404/404";
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
    isSuccess && detailData != undefined ?
      <>
        <CompanyContext.Provider value={detailData}>
          <CompanyHeader/>
        </CompanyContext.Provider>
      </>
      : <NotFound></NotFound>
  )
}

export default CompanyDetail