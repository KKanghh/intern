import axios from "axios";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from "next";
import NoticeIdController from "~/screens/noticeId/NoticeIdController";

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
    const res = await axios.get(
      `https://dev-api.tdogtdog.com/post/${context.params!.noticeId}`,
      {
        headers: {
          "TT-OS": "IOS",
          "TT-Version": 999,
        },
      }
    );
    const { title, content } = res.data;
    return {
      props: { title, content },
    };
  } catch (err) {
    console.error(err);
    throw new Error("에러");
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await axios.get(`https://dev-api.tdogtdog.com/post/backup`, {
      headers: {
        "TT-OS": "IOS",
        "TT-Version": 999,
      },
    });

    return {
      paths: res.data.map((notice: ResponseProps) => {
        return { params: { noticeId: notice.id.toString() } };
      }),
      fallback: "blocking",
    };
  } catch (err) {
    console.error(err);
    throw new Error("에러");
  }
};
