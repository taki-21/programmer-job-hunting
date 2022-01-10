import React, { useContext, useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import { AuthContext } from "App"
import { CompanyContext } from '../CompanyDetail';
import { SimpleDialog } from 'components/LoginDialog';

// contextを通して受け取った情報から、会社説明と会社画像を表示する
const CompanyHeader: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser, isSignedIn } = useContext(AuthContext)
  const company = useContext(CompanyContext);
  const [isTapped, setIsTapped] = useState<boolean>(false);

  const OnTapButton = () => {
    if (isSignedIn && currentUser) {
      // for debug
      // console.log('ログインしています。')
      setIsTapped(!isTapped);
    } else {
      // for debug
      // console.log('ログインしていません。')
      setOpen(true);
    }

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
        <SimpleDialog open={open} onBackdropTapped={() => setOpen(false)} />
      </>
    );
  }
  return (
    <>
    </>
  );
}

export default CompanyHeader;