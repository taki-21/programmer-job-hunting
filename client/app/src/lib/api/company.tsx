import { Company } from "interfaces";
import client from "./client";
import { BriefCompany } from '../../interfaces/index';

/// (/) おすすめの会社情報を5件取得する
export const reccomendCompany = () => {
  return client.get<Array<BriefCompany>>("recommended-companies")
}

/// 会社名で検索する際に使用する。
export const companyNameSearch = (keyword: string, page: string) => {
  if (page === "") {
    return client.get<Array<BriefCompany>>("companies/search?keyword=" + keyword);
  }
  return client.get<Array<BriefCompany>>("companies/search?keyword=" + keyword + "&page=" + page);
}

// 「全ての会社で探す」ページで使用する。
// 引数で渡されたページの会社を取得する 
export const searchCompany = (page: number) => {
  const getUrl: string = `companies?page=${page}`;
  return client.get<Array<BriefCompany>>(getUrl)
}

// WIP : 引数で渡した言語を使用している会社を取得する
export const skillSearchCompany = (lang: string) => {
  const getUrl: string = `skill-search?lang=${lang}`;
  return client.get<Array<BriefCompany>>(getUrl)
}

// 指定した会社番号の詳細情報を取得する
export const companyDetail = (companyId: string) => {
  const getUrl: string = `companies/${companyId}`;
  return client.get(getUrl);
}

export const registration = (data: Company) => {
  return client.post("/companies")
}