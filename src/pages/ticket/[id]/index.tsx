import { GetServerSideProps } from "next";
import { useSession, getSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { api } from "../../../service/api";
import Confetti from "react-confetti";
import { TicketType } from "../../api/ticket";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { saveAs } from "file-saver";

export default function Ticket() {
  const { data: session } = useSession();

  const [dataTicket, setDataTicket] = useState<TicketType>();
  const [height, setHeight] = useState<number | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  const confettiRef = useRef(null);

  useEffect(() => {
    async function getDataTicket() {
      const { data } = await api.get<TicketType>("/ticket");

      setDataTicket(data);
    }

    getDataTicket();

    if (confettiRef.current) {
      setHeight(() => confettiRef.current.clientHeight as number);
      setWidth(confettiRef.current.clientWidth as number);
    }
  }, []);

  if (!dataTicket) {
    return;
  }

  function formattedName() {
    if (session?.user?.name) {
      const names = session.user.name.split(" ");

      return names.length >= 3 ? `${names[0]} ${names[1]}` : session.user.name;
    }

    return "";
  }

  const srcImage = `http://localhost:3000/api/og?image=${
    session?.user?.image
  }&name=${formattedName()}&ticketNr=${dataTicket?.ticketNr}`;

  const downloadImage = (imageUrl: string) => {
    saveAs(imageUrl, "ticket.png"); // Put your image url here.
  };

  return (
    <div
      ref={confettiRef}
      className="bg-gray-200 flex-wrap w-screen h-screen flex justify-center items-center relative"
    >
      <Confetti recycle={false} numberOfPieces={900} />

      <div className="flex flex-col items-center justify-center">
        <img
          className="absolute bottom-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full opacity-50"
          src="/logo-ns.jpg"
          alt=""
        />

        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
          <MouseParallaxChild factorX={0.3} factorY={0.5}>
            <img className="w-80 sm:w-auto" src={srcImage} />
          </MouseParallaxChild>
        </MouseParallaxContainer>

        <button
          className="z-10 mt-4 cursor-pointer border gap-3 inline-flex justify-center items-center border-zinc-900 focus:ring-2 outline-none focus:ring-zinc-900 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-zinc-900 rounded-lg bg-zinc-900 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-zinc-900 hover:brightness-95"
          onClick={() => downloadImage(srcImage)}
        >
          Pegue o seu ticket
        </button>
      </div>

      <div className="absolute inset-x-0 transform-gpu overflow-hidden blur-3xl bottom-0 right-0">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
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
