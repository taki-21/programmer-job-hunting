import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField"

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


const Registration: React.FC = () => {
  const classes = useStyles()
  const [companyName, setComopanyName] = useState<String>("")
  const [companyAddress, setComopanyAddress] = useState<String>("")
  const [companyOverview, setComopanyOverview] = useState<String>("")
  const [companyNumOfEmp, setComopanyNumOfEmp] = useState<String>("")

  return (
    <>
      <form noValidate autoComplete="off">
        <Typography
          variant="h5"
        >
          会社情報登録
        </Typography>
        <Card className={classes.card}>
          <CardContent className={classes.cardContentText}>会社情報を入力してください。</CardContent>
          <CardContent>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="会社名"
              placeholder="例) freeeeee"
              value={companyName}
              margin="dense"
              onChange={(event) => setComopanyName(event.target.value)}
            />

            <TextField
              variant="outlined"
              required
              fullWidth
              label="会社住所"
              placeholder="例) 東京都品川区...."
              value={companyAddress}
              margin="dense"
              onChange={event => setComopanyAddress(event.target.value)}
              multiline
              rows={2}
            />

            <TextField
              variant="outlined"
              required
              fullWidth
              label="従業員の数"
              placeholder="例) 100 - 200"
              value={companyNumOfEmp}
              margin="dense"
              onChange={event => setComopanyNumOfEmp(event.target.value)}
            />

            <TextField
              variant="outlined"
              required
              fullWidth
              label="会社概要"
              placeholder="2000文字以内"
              value={companyOverview}
              margin="dense"
              onChange={event => setComopanyOverview(event.target.value)}
              multiline
              rows={10}
            />
            <div className={classes.imageSelectButton}>
              <Button component="label" variant="outlined">
                会社ロゴ画像アップロード
                <input
                  type="file"
                  name="image"
                  style={{ display: "none" }}
                />
              </Button>
            </div>
            <div className={classes.imageSelectButton}>
              <Button component="label" variant="outlined">
                アイキャッチ画像アップロード
                <input
                  type="file"
                  name="image"
                  style={{ display: "none" }}
                />
              </Button>
            </div>
            <div className={classes.submitButton}>
              <Button variant="contained" color="primary" href="">
                送信
              </Button>
            </div>

          </CardContent>
        </Card>
      </form>

    </>
  )
}

export default Registration