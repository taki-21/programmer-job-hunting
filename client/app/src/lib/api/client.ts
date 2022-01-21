import applyCaseMiddleware from "axios-case-converter"
import axios from "axios"
import Cookies from "js-cookie"

// applyCaseMiddleware:
// axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
// または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true
}

const client = applyCaseMiddleware(axios.create({
  baseURL: "http://localhost:3001/api/v1"
}), options)

client.interceptors.request.use(
  config => {
    if (Cookies.get("_access_token") && Cookies.get("_client") && Cookies.get("_uid")){
      config.headers.common["access_token"] = Cookies.get("_access_token");
      config.headers.common["client"] = Cookies.get("_client");
      config.headers.common["uid"] = Cookies.get("_uid");
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default client