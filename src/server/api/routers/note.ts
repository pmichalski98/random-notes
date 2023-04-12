
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const noteRouter = createTRPCRouter({
  addNote: privateProcedure.
  input(
    z.object({
      title: z.string(),
      content: z.string(),
    })
  ).mutation( async ({ctx, input}) => {
     return await ctx.prisma.note.create({
      data: {
        title: input.title,
        content: input.content,
        userId: ctx.userId,
      }
    })
  })
});
