import { Company } from "interfaces";
import client from "lib/api/client";

/// ( apiを使用するページ )　説明　の形式で説明している

/// (/) おすすめの会社情報を5件取得する
export const reccomendCompany = () => {
  return client.get("recommended-companies")
}

/// (/search) 会社名で検索する際に使用
export const companyNameSearch = (keyword: string, page: string) => {
  if (page === "") {
    return client.get("companies/search?keyword=" + keyword);
  }
  return client.get("companies/search?keyword=" + keyword + "&page=" + page);
}

export const searchCompany = (page: string) => {
  const getUrl: string = `search/${page}`;
  return client.get(getUrl)
}

export const companyDetail = (companyId: string) => {
  const getUrl: string = `companies/${companyId}`;
  return client.get(getUrl);
}

export const registration = (data: Company) => {
  return client.post("/companies")
}