import React, { useCallback, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import axios from "axios";

import client from "lib/api/client";
import AlertMessage from "components/AlertMessage"

const useStyles = makeStyles((theme: Theme) => ({
  cardContentText: {
    padding: "5px 20px",
  },
  card: {
    padding: theme.spacing(2),
    margin: "15px 0px",
  },
  imageSelectButton: {
    margin: "15px 5px",
  },
  submitButton: {
    textAlign: "center",
    margin: "15px 0px",
  },
}));

const Registration: React.FC = () => {
  const classes = useStyles();
  // TODO:Companyをsetするようにリファクタ
  const [companyImage, setImage] = useState<File>();
  const [companyName, setCompanyName] = useState<string>("");
  const [companyAddress, setCompanyAddress] = useState<string>("");
  const [companyOverview, setCompanyOverview] = useState<string>("");
  const [companyNumOfEmp, setCompanyNumOfEmp] = useState<string>("");
  const [preview, setPreview] = useState<string>("");

  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  const uploadImage = useCallback((e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
  }, []);

  // プレビュー 機能
  const previewImage = useCallback((e) => {
    const file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
  }, []);

  // FormData形式でデータを作成
  const createFormData = (url: string): FormData => {
    const formData = new FormData();
    formData.append("company[company_name]", companyName); // ポイント1！
    formData.append("company[company_overview]", companyOverview);
    formData.append("company[company_address]", companyAddress);
    formData.append("company[company_num_of_emp]", companyNumOfEmp);
    formData.append("company[company_image]", url);
    return formData;
  };
  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var url = await createPost();

    const data = createFormData(url);
    await client.post("/companies", data);
    setCompanyName("");
    setCompanyAddress("");
    setCompanyNumOfEmp("");
    setCompanyOverview("");
    setImage(undefined);
    setPreview("");

    setAlertMessageOpen(true);
  };

  const createPost = async () => {
    // 署名付きURLを取得する
    const { data: { signedUrl, key } } = await client.post("/images");
    // 取得した署名付きURLに画像をアップロードする
    await axios.put(signedUrl, companyImage, {
      headers: {
        // eslint-disable-next-line no-restricted-globals
        'Access-Control-Allow-Origin': location.href,
      },
    })
    var imageURL = process.env.REACT_APP_S3_ENDPOINT + key;
    // setStateで更新した値が更新されるのは関数が終わった後なので、URLを戻り値として返す
    return imageURL;
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={handleCreatePost}>
        <Typography variant="h5">会社情報登録</Typography>
        <Card className={classes.card}>
          <CardContent className={classes.cardContentText}>
            会社情報を入力してください。
          </CardContent>
          <CardContent>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="会社名"
              placeholder="例) freeeeee"
              value={companyName}
              margin="dense"
              onChange={(event) => setCompanyName(event.target.value)}
            />

            <TextField
              variant="outlined"
              required
              fullWidth
              label="会社住所"
              placeholder="例) 東京都品川区...."
              value={companyAddress}
              margin="dense"
              onChange={(event) => setCompanyAddress(event.target.value)}
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
              onChange={(event) => setCompanyNumOfEmp(event.target.value)}
            />

            <TextField
              variant="outlined"
              required
              fullWidth
              label="会社概要"
              placeholder="2000文字以内"
              value={companyOverview}
              margin="dense"
              onChange={(event) => setCompanyOverview(event.target.value)}
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
                    uploadImage(e);
                    previewImage(e);
                  }}
                />
              </Button>
            </div>
            {preview ? (
              <Box sx={{ borderRadius: 1, borderColor: "grey.400" }}>
                <IconButton color="inherit" onClick={() => setPreview("")}>
                  <CancelIcon />
                </IconButton>
                <img src={preview} alt="preview img" />
              </Box>
            ) : null}
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
      <AlertMessage
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="success"
        message="会社情報を登録しました。"
      />
    </>
  );
};

export default Registration;
