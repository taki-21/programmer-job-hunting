import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { companyDetail } from "lib/api/company";
import { RouteComponentProps } from 'react-router-dom'

type PageProps = {} & RouteComponentProps<{ companyId: string }>;

const CompanyDetail: React.FC<PageProps> = props => {
  const [detailData, setDetailData] = useState({ id: 0, companyName: "", companyOverview: "", companyNumOfEmp: "" })

  const getDetailData = async () => {
    const res = await companyDetail(props.match.params.companyId);

    if (res.status === 200) {
      setDetailData(res.data);
    }
  }

  useEffect(() => {
    getDetailData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Typography variant="h3" gutterBottom>
        {detailData.companyName}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {detailData.companyOverview}
        {detailData.companyNumOfEmp}
      </Typography>
    </>
  )
}

export default CompanyDetail