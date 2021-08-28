import client from "lib/api/client"

// 
export const reccomendCompany = () => {
  return client.get("companies")
}

export const searchCompany = (page: number) => {
  const getUrl: string = `search/${page}`;
  return client.get(getUrl)
}

export const companyDetail = (companyId: string) => {
  const getUrl: string = `companies/${companyId}`;
  return client.get(getUrl);
}