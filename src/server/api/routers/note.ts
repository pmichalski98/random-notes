
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

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
  }),
  getNotes: privateProcedure
    .query(async ({ctx}) => {
      const notes = await ctx.prisma.note.findMany({where: { userId: ctx.userId }})
      if (!notes) throw new TRPCError("NOT_FOUND", "NOT_FOUND");
      return notes;
    }),
  deleteNote: privateProcedure
    .input(z.string())
    .mutation(async ({ctx, input}) => {
      const deletedNote =  await ctx.prisma.note.delete({
        where: {
          id: input
        }
      })
      if(!deletedNote) throw new TRPCError("NOT_FOUND", "NOT_FOUND");
      return deletedNote;
    })
});
