"use client";

import { trpc } from "../_trpc/client";

export default function TodoList() {
  const result = trpc.greeting.useQuery({ name: "client" });
  return (
    <div className="p-10 bg-slate-300 rounded-md ">
      <h1 className="text-4xl font-bold">{result.data?.text}</h1>
    </div>
  );
}
