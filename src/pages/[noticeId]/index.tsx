import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import NoticeIdController from "~/screens/noticeId/NoticeIdController";
import request from "~/libs/axios";

interface NoticePageProps {
  title: string;
  content: string;
}

interface ResponseProps {
  id: number;
}

const NoticePage: React.FC<NoticePageProps> = ({ title, content }) => (
  <NoticeIdController title={title} content={content} />
);
export default NoticePage;

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  try {
    const res = await request.get(`/post/${context.params!.noticeId}`);
    const { title, content } = res.data;
    return {
      props: { title, content },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await request.get(`/post/backup`);

  return {
    paths: res.data.map((notice: ResponseProps) => {
      return { params: { noticeId: notice.id.toString() } };
    }),
    fallback: "blocking",
  };
};
