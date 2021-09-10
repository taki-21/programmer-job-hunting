import React, { useCallback, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Button, Card, CardContent, FormGroup, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import CancelIcon from "@material-ui/icons/Cancel"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme: Theme) => ({
  cardContentText: {
    padding: "5px 20px"
  },
  card: {
    padding: theme.spacing(2),
    maxWidth: 900,
    margin: "15px 0px"
  },
  imageSelectButton: {
    margin: "15px 5px"
  },
  submitButton: {
    textAlign: "center",
    margin: "15px 0px"
  }
}))


const SkillSearch: React.FC = () => {
  const classes = useStyles()
  const [frontendChecked, setFrontendChecked] = React.useState(true);
  const [backendChecked, setBackendChecked] = React.useState(true);


  const handleSkillSearch = async (e: React.FormEvent<HTMLFormElement>) => {

  }


  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleSkillSearch}>
        <Typography
          variant="h5"
        >
          スキルで探す
        </Typography>
        <Card className={classes.card}>
          <CardContent className={classes.cardContentText}>自身のスキルに合う会社を選ぶことができます。</CardContent>
          <CardContent>
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