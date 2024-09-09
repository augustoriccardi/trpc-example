import { createTRPCReact } from "@trpc/react-query";

import { type AppRouter } from "@/server"; // habría que importar desde módulo de npm

export const trpc = createTRPCReact<AppRouter>({});
