import { GetServerSideProps } from "next";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  function handleLogin() {
    signIn("google");
  }

  return (
    <div className="isolate relative bg-gray-200">
      <img
        className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full opacity-50"
        src="/logo-ns.jpg"
        alt=""
      />
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40 h-screen flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              Garanta seu ticket na melhor confra
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
              Click no botão abaixo e gere o seu ticket para participar da White
              Party do GC NonStop
            </p>
            <div className="mt-8 flex gap-x-4 sm:justify-center">
              <button
                onClick={handleLogin}
                className="border gap-3 inline-flex justify-center items-center border-zinc-900 focus:ring-2 outline-none focus:ring-zinc-900 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-zinc-900 rounded-lg bg-zinc-900 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-zinc-900 hover:brightness-95"
              >
                <img className="w-5" src="/google.png" alt="google image" />
                Entrar com o Google
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: `/ticket/${session.user?.id}`,
      },
    };
  }

  return {
    props: {},
  };
};
