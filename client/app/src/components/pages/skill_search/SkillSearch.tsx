import React, { useCallback, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Button, Card, CardContent, FormGroup, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import CancelIcon from "@material-ui/icons/Cancel"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme: Theme) => ({

  card: {
    padding: theme.spacing(2),
    width: 500,
    margin: "15px 0px"
  },
  cardContent: {},
  cardContentText: {
    padding: "5px 20px"
  },
  cardContentHeaderText: {

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
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

// 「開発言語で絞る」、「フレームワークで絞る」、「職種で絞る」
const SkillSearch: React.FC = () => {
  const classes = useStyles()
  const [frontendChecked, setFrontendChecked] = React.useState(true);
  const [backendChecked, setBackendChecked] = React.useState(true);
  const [lang, setLang] = React.useState('');


  const handleSkillSearch = async (e: React.FormEvent<HTMLFormElement>) => {

  }



  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string);
  };


  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSkillSearch}>
        <Typography
          variant="h5"
        >
          スキルで探す
        </Typography>
        <Card className={classes.card}>

          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardContentHeaderText} variant="h6">
              開発言語で絞る
            </Typography>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">開発希望言語</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lang}
                  onChange={handleChange}
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
            </div>
          </CardContent>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.cardContentHeaderText} variant="h6">
              フレームワークで絞る
            </Typography>
            <div>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">フレームワーク</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={lang}
                  onChange={handleChange}
                >
                  <MenuItem value={"Rails"}>Rails</MenuItem>
                  <MenuItem value={"React"}>React</MenuItem>
                  <MenuItem value={"Flask"}>Flask</MenuItem>
                  <MenuItem value={"Django"}>Django</MenuItem>
                  <MenuItem value={"Flutter"}>Flutter</MenuItem>

                </Select>
              </FormControl>
            </div>
          </CardContent>
          <CardContent>
            <Typography className={classes.cardContentHeaderText} variant="h6">
              職種・ポジションで絞る(複数選択可)
            </Typography>
            <div>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox onChange={(event) => setFrontendChecked(event.target.checked)} name="checkedA" />}
                  label="フロントエンド"
                />
                <FormControlLabel
                  control={<Checkbox onChange={(event) => setBackendChecked(event.target.checked)} name="checkedB" />}
                  label="バックエンド"
                />
              </FormGroup>
            </div>
            <div>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox onChange={(event) => setFrontendChecked(event.target.checked)} name="checkedA" />}
                  label="フルスタック"
                />
                <FormControlLabel
                  control={<Checkbox onChange={(event) => setBackendChecked(event.target.checked)} name="checkedB" />}
                  label="その他"
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

export default SkillSearch