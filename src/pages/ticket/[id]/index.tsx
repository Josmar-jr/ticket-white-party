import { GetServerSideProps } from "next";
import { useSession, getSession } from "next-auth/react";

export default function Ticket() {
  const { data: session } = useSession();

  return (
    <div className="bg-zinc-600">
      {session?.user?.email}
      <img
        src={`http://localhost:3000/api/og?image=${session?.user?.image}&name=${session?.user?.name}`}
      />
    </div>
  );
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
