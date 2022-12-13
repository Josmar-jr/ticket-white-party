import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Ticket() {
  const { data: session } = useSession();
  const router = useRouter();

  return <div>{session?.user?.email}</div>;
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `/`,
      },
    };
  }

  return {
    props: {},
  };
};
