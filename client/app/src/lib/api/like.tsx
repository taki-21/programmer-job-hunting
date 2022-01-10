import client from "./client";

export const addLike = (conpanyId: number, userId: number) => {
  return client.get(`companies/${conpanyId}/likes/${userId}`);
}

export const removeLike = (conpanyId: number, userId: number) => {
  return client.delete(`companies/${conpanyId}/likes/${userId}`);
}