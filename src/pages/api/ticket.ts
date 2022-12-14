// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prismaClient } from "../../lib/prisma";

export interface TicketType {
  ticketNr: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session?.user) {
    return;
  }

  const ticket = await prismaClient.ticket.findFirst({
    where: {
      userId: session.user.id,
    },
    include: {
      user: {},
    },
  });

  if (ticket) {
    return res.status(200).json({ ticketNr: ticket.ticketNr });
  }

  const ticketQuantity = await prismaClient.ticket.count();

  const newTicket = await prismaClient.ticket.create({
    data: {
      userId: session.user.id,
      ticketNr: ticketQuantity + 1,
    },
  });

  return res.status(200).json({ ticketNr: newTicket.ticketNr });
}
