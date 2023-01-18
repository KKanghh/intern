import request from "./axios";

export const getNotice = async ({ pageParam = 1 }) => {
  const res = await request.get(
    `/post?sort=createdAt,desc&p=${pageParam}`
    // "/post/backup?board=announcement",
  );
  return res.data;
};
