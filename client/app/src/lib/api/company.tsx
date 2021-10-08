import { Company } from "interfaces";
import client from "lib/api/client"

/// (/) おすすめの会社情報を5件取得する
export const reccomendCompany = () => {
  return client.get("recommended-companies")
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