import { Box, Container, Grid, Link, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const footerDataLeft = [
  {
    label: "ホーム",
    href: "/",
  },
  {
    label: "会社を探す",
    href: "/companies",
  },
  {
    label: "スキルで探す",
    href: "/skill",
  },

];

const footerDataRight = [
  {
    label: "マイページ",
    href: "/mypage",
  },
  {
    label: "ログイン・ログアウト",
    href: "/mypage",
  },
  {
    label: "管理者",
    href: "/",
  },
];


const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#4A69BD",
    marginTop: 30,
    paddingTop: 20,
  },
  footerMenu: {
    padding: "5px 25px",
  }
}))

export default function Footer() {
  const { footer, footerMenu } = useStyles();


  const getFooterMenu = (footerData: { label: string, href: string }[]) => {
    return footerData.map(({ label, href }) => {
      return (
        <Box className={footerMenu} key={label}>
          <Link {
            ...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }
          }>
            {label}
          </Link>
        </Box>
      );
    })
  }

  return <footer>
    <Box color="White" className={footer}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            {getFooterMenu(footerDataLeft)}
          </Grid>
          <Grid item xs={12} sm={6}>
            {getFooterMenu(footerDataRight)}
          </Grid>
        </Grid>
      </Container>
      <Box textAlign="center" p={3}>
        @2021 All rights Reserved.
      </Box>

    </Box>
  </footer >
};
