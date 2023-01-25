import request from "./axios";

export const getNotice = async ({ pageParam = 1 }) => {
  const res = await request.get("/post", {
    params: {
      sort: "createdAt,desc",
      p: pageParam,
    },
  });
  return res.data;
};
