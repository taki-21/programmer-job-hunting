import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Button, Card, CardContent, FormGroup, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme: Theme) => ({

  card: {
    padding: theme.spacing(2),
    width: 700,
    margin: "15px 0px"
  },
  cardContentText: {
    padding: "5px 20px"
  },
  imageSelectButton: {
    margin: "15px 5px"
  },
  submitButton: {
    textAlign: "center",
    margin: "15px 0px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  Checkbox: {
    width: 180,
  }
}))

// 「開発言語で絞る」、「フレームワークで絞る」、「職種で絞る」
const SkillSearchBox: React.FC = () => {
  const classes = useStyles()
  // TODO: 変数群のリファクタリング
  const [frontendChecked, setFrontendChecked] = React.useState(false);
  const [backendChecked, setBackendChecked] = React.useState(false);
  const [fullStackChecked, setFullStackChecked] = React.useState(false);
  const [infraChecked, setInfraCheckod] = React.useState(false);
  const [networkChecked, setNetworkChecked] = React.useState(false);
  const [otherChecked, setOtherChecked] = React.useState(false);
  const [lang, setLang] = React.useState('');
  const history = useHistory()


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // クエリを作成して画面遷移する。
    let query = "/search/skill?";
    if (lang !== "") {
      query += "lang=" + lang + "&";
    }
    query += "positions=";
    // この部分、配列にするなどしてリファクタ必須、、、汚い、、
    if (frontendChecked) {
      query += "frontend,"
    }
    if (backendChecked) {
      query += "backend,";
    }
    if (fullStackChecked) {
      query += "fullstack,"
    } if (infraChecked) {
      query += "infra,";
    } if (networkChecked) {
      query += "network,";
    }
    if (otherChecked) {
      query += "other,"
    }
    query = query.slice(0, query.length - 1);
    history.push(query);
  }



  const handleLangChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };


  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography
          variant="h5"
        >
          スキルで探す
        </Typography>
        <Card className={classes.card}>

          <CardContent >
            <Typography variant="h6">
              開発言語で絞る
            </Typography>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">開発希望言語</InputLabel>
              {
                //https://github.com/mui-org/material-ui/issues/13221
                // セレクトboxを開くとエラーが出るが、今のところこれは問題ないらしい....
              }
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={lang}
                onChange={handleLangChange}
              >
                <MenuItem value={"Go"}>Go</MenuItem>
                <MenuItem value={"TypeSctipt"}>TypeScript</MenuItem>
                <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
                <MenuItem value={"Dart"}>Dart</MenuItem>
                <MenuItem value={"ruby"}>ruby</MenuItem>
                <MenuItem value={"Python"}>Python</MenuItem>
                <MenuItem value={"C言語"}>C言語</MenuItem>
                <MenuItem value={"C++"}>C++</MenuItem>
                <MenuItem value={"Java"}>Java</MenuItem>
                <MenuItem value={"Swift"}>Swift</MenuItem>
                <MenuItem value={"Object-C"}>Object-C</MenuItem>
                <MenuItem value={"Rust"}>Rust</MenuItem>
                <MenuItem value={"C#"}>C#</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              職種・ポジションで絞る(複数選択可)
            </Typography>
            <div>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox onChange={(event) => setFrontendChecked(event.target.checked)} />}
                  label="フロントエンド"
                  className={classes.Checkbox}
                />
                <FormControlLabel
                  control={<Checkbox onChange={(event) => setBackendChecked(event.target.checked)} />}
                  label="バックエンド"
                  className={classes.Checkbox}
                />
                <FormControlLabel
                  control={<Checkbox onChange={(event) => setFullStackChecked(event.target.checked)} />}
                  label="フルスタック"
                  className={classes.Checkbox}
                />
              </FormGroup>
            </div>
            <div>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox onChange={(event) => setInfraCheckod(event.target.checked)} />}
                  label="インフラ"
                  className={classes.Checkbox}
                />
                <FormControlLabel
                  control={<Checkbox onChange={(event) => setNetworkChecked(event.target.checked)} />}
                  label="ネットワーク"
                  className={classes.Checkbox}
                />
                <FormControlLabel
                  control={<Checkbox onChange={(event) => setOtherChecked(event.target.checked)} />}
                  label="その他"
                  className={classes.Checkbox}
                />
              </FormGroup>
            </div>


            <div className={classes.submitButton}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
                検索
              </Button>
            </div>

          </CardContent>
        </Card>
      </form>

    </>
  )
}

export default SkillSearchBox