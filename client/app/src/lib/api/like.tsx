import client from "./client";

export const addLike = (conpanyId: number, userId: number) => {
  return client.post(`companies/${conpanyId}/likes`);
}

export const removeLike = (conpanyId: number, userId: number) => {
  return client.delete(`companies/${conpanyId}/likes`);
}