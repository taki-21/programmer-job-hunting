import client from "lib/api/client"

// 
export const reccomendCompany = () => {
  return client.get("companies")
}

export const searchCompany = (page: number) => {
  const getUrl: string = `search?page=${page}`;
  return client.get(getUrl)
}