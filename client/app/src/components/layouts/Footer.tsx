import { Box, Container, Grid, Link } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return <footer>
    <Box bgcolor="text.secondary" color="White" marginTop={30}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Box>
              <Link href="/" color="inherit">
                ホーム
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                会社を探す
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                スキルで探す
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box>
              <Link href="/mypage" color="inherit">
                マイページ
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                ログイン・ログアウト
              </Link>
            </Box>
            <Box>
              <Link href="/" color="inherit">
                管理者
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center" p={3}>
        @2021 All rights Reserved.
      </Box>

    </Box>
  </footer >
};

export default Footer