import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import * as trpcNext from "@trpc/server/adapters/next";

export const appRouter = router({
  greeting: publicProcedure
    // This is the input schema of your procedure
    // 💡 Tip: Try changing this and see type errors on the client straight away
    .input(
      z.object({
        name: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      // This is what you're returning to your client
      return {
        text: `hello, ${input?.name ?? "world"}!`,
        // 💡 Tip: Try adding a new property here and see it propagate to the client straight-away
      };
    }),
  getTodo: publicProcedure
    .input(z.object({ todo: z.string() }))
    .query(({ input }) => {
      return { text: `Todo: ${input.todo}` };
    }),

  // 💡 Tip: Try adding a new procedure here and see if you can use it in the client!
  // getUser: publicProcedure.query(() => {
  //   return { id: '1', name: 'bob' };
  // }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
