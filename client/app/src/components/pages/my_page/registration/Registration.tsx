import React, { useCallback, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles"
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import CancelIcon from "@material-ui/icons/Cancel"
import axios, { AxiosPromise, AxiosResponse } from "axios"
import applyCaseMiddleware from "axios-case-converter"

// Postするデータにはidが存在しないことによりエラーが発生したので
// interfaceで定義したCompanyとは別で定義している（要リファクタ）

interface PostCompany {
  companyName: String
  companyOverview: String
  companyNumOfEmp: String
  companyImage: File | undefined
}

const useStyles = makeStyles((theme: Theme) => ({
  cardContentText: {
    padding: "5px 20px"
  },
  card: {
    padding: theme.spacing(2),
    maxWidth: 900,
    margin: "15px 0px",
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
  // TODO:Companyをsetするようにリファクタ
  const [image, setImage] = useState<File>()
  const [companyName, setComopanyName] = useState<String>("")
  const [companyAddress, setComopanyAddress] = useState<String>("")
  const [companyOverview, setComopanyOverview] = useState<String>("")
  const [companyNumOfEmp, setComopanyNumOfEmp] = useState<String>("")
  const [preview, setPreview] = useState<string>("")

  const uploadImage = useCallback((e) => {
    const file = e.target.files[0]
    setImage(file)
  }, [])

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data: PostCompany = {
      companyName: companyName,
      companyOverview: companyOverview,
      companyNumOfEmp: companyNumOfEmp,
      companyImage: image
    }


    await createPost(data)
      .then(() => {
        setComopanyName("")
        setComopanyAddress("")
        setComopanyNumOfEmp("")
        setComopanyOverview("")
        setImage(undefined)
      })
  }

  const previewImage = useCallback((e) => {
    const file = e.target.files[0]
    setPreview(window.URL.createObjectURL(file))
  }, [])

  const createPost = (data: PostCompany): AxiosPromise => {
    const client = applyCaseMiddleware(axios.create({
      baseURL: "http://localhost:3001/api/v1",
      headers: {
        "Content-Type": "multipart/form-data" // 画像ファイルを取り扱うのでform-dataで送信
      },
    }), { ignoreHeaders: true });

    client.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => {
        const data = response.data
        return { ...response.data, data }
      }
    )

    return client.post("/companies", { "companies": { data } })
  }

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleCreatePost}>
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
                会社画像アップロード
                <input
                  id="compamy-file"
                  accept="image/*"
                  type="file"
                  name="image"
                  style={{ display: "none" }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    uploadImage(e)
                    previewImage(e)
                  }}
                />
              </Button>
            </div>
            {preview ?
              <Box
                sx={{ borderRadius: 1, borderColor: "grey.400" }}

              >
                <IconButton
                  color="inherit"
                  onClick={() => setPreview("")}
                >
                  <CancelIcon />
                </IconButton>
                <img
                  src={preview}
                  alt="preview img"
                />
              </Box> : null
            }
            <div className={classes.submitButton}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
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