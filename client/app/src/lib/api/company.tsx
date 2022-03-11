import { Company } from "interfaces";
import client from "./client";
import { BriefCompany } from '../../interfaces/index';

/// ( apiを使用するページ )　説明　の形式で説明している

/// (/) おすすめの会社情報を5件取得する
export const reccomendCompany = () => {
  return client.get<Array<BriefCompany>>("recommended-companies")
}

/// (/search) 会社名で検索する際に使用
export const companyNameSearch = (keyword: string, page: string) => {
  if (page === "") {
    return client.get<Array<BriefCompany>>("companies/search?keyword=" + keyword);
  }
  return client.get<Array<BriefCompany>>("companies/search?keyword=" + keyword + "&page=" + page);
}

/// 全ての会社で探すページで使用する
/// ページネーションを行うことができる
export const searchCompany = (page: number) => {
  const getUrl: string = `companies?page=${page}`;
  return client.get<Array<BriefCompany>>(getUrl)
}

export const skillSearchCompany = (lang: string) => {
  const getUrl: string = `skill-search?lang=${lang}`;
  return client.get<Array<BriefCompany>>(getUrl)
}

export const companyDetail = (companyId: string) => {
  const getUrl: string = `companies/${companyId}`;
  return client.get(getUrl);
}

export const registration = (data: Company) => {
  return client.post("/companies")
}