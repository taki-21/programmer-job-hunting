import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink } from "react-router-dom";

// 「技術で探す」は未実装
const headersData = [
  {
    label: "会社を探す",
    href: "/companies",
  },
  {
    label: "スキルで探す",
    href: "/skill",
  },
  {
    label: "マイページ",
    href: "/mypage",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#41B3DB",
    paddingRight: "50px",
    paddingLeft: "100px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontWeight: 700,
    color: "#FFFFFF"
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "20px",
  },
  toolbar: {
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [pageState, setPageState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = pageState;

  // 画面サイズで使用する画面を切り替える
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setPageState((prevState) => ({ ...prevState, mobileView: true }))
        : setPageState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    // resizeイベントが発生した際に関数を実行する
    window.addEventListener("resize", () => setResponsiveness());

    // hooksにおいてはクリーンアップ関数を返すことで、二度目以降のレンダリング時に
    // 前回の副作用を消してしまうことができる。
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {siteLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setPageState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setPageState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{siteLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const siteLogo = (
    <Button {...{ to: "/", component: RouterLink, }}>
      <Typography variant="h6" component="h1" className={logo}>
        Programmer-Job-Hunting
      </Typography>
    </Button>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header} position="sticky">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}