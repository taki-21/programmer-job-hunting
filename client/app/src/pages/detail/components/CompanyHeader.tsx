import React, { useContext, useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

import { AuthContext } from "App"
import { CompanyContext } from '../CompanyDetail';
import { SimpleDialog } from 'components/LoginDialog';
import { removeLike, addLike } from '../../../lib/api/like';

// contextを通して受け取った情報から、会社説明と会社画像を表示する
const CompanyHeader: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { currentUser, isSignedIn } = useContext(AuthContext)
  const company = useContext(CompanyContext);
  const [isTapped, setIsTapped] = useState<boolean>(false);

  const OnTapButton = () => {
    if (isSignedIn && currentUser && company !== null) {
      if (isTapped) {
        // 既にお気に入りを押している場合はremoveLikeを呼び出す
        removeLike(company.id, currentUser.userId);
      } else if (!isTapped) {
        // お気に入りに登録していない
        addLike(company.id, currentUser.userId);
      }
      setIsTapped(!isTapped);
    } else {
      // ログインできていない場合はログインフォームを出す
      setOpen(true);
    }

  }

  if (company !== null) {
    return (
      <>
        <Typography variant="h4" gutterBottom>
          {company?.companyName}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {currentUser?.userId}hogehgoe
        </Typography>
        {
          isTapped ?
            <Button
              variant='text'
              startIcon={
                <StarIcon htmlColor='#f1c40f' />
              }
              onClick={() => { OnTapButton() }}
            >
              お気に入り済み
            </Button>
            :
            <Button
              variant='text'
              startIcon={<StarBorderIcon />}
              onClick={() => { OnTapButton() }}
              color={'primary'}
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