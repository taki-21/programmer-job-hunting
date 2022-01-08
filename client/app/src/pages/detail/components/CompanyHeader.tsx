import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { CompanyContext } from '../CompanyDetail';

// contextを通して受け取った情報から、会社説明と会社画像を表示する
const CompanyHeader: React.FC = () => {
  // contextをうまく使えていないので、来週までにベストプラクティスを探る
  const company = useContext(CompanyContext);

  if(company !== null ){
    return (
      <>
        <Typography variant="h4" gutterBottom>
            {company?.companyName}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {company?.companyOverview }
        </Typography>
      </>
    );
  }
  return (
    <>
    </>
  );
}

export default CompanyHeader;