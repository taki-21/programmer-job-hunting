import React, { useContext, useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import { CompanyContext } from '../CompanyDetail';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

// contextを通して受け取った情報から、会社説明と会社画像を表示する
const CompanyHeader: React.FC = () => {
  // contextをうまく使えていないので、来週までにベストプラクティスを探る
  const company = useContext(CompanyContext);
  const [isTapped, setIsTapped] = useState<boolean>(false);

  const OnTapButton = () => {
    // todo : ログイン状態を調べてログインしていない場合にはダイアログを表示する
    setIsTapped(!isTapped);
  }

  if (company !== null) {
    return (
      <>
        <Typography variant="h4" gutterBottom>
          {company?.companyName}
        </Typography>
        {
          isTapped ?
            <Button
              variant='text'
              startIcon={<StarIcon />}
              onClick={() => { OnTapButton() }}
            >
              お気に入り済み
            </Button>
            :
            <Button
              variant='text'
              startIcon={<StarBorderIcon />}
              onClick={() => { OnTapButton() }}
            >
              お気に入りに登録する
            </Button>
        }

      </>
    );
  }
  return (
    <>
    </>
  );
}

export default CompanyHeader;