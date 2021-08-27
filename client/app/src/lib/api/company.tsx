import client from "lib/api/client"

// 
export const reccomendCompany = () => {
  return client.get("companies")
}
