"use client";

import { trpc } from "../_trpc/client";

export default function Greeting() {
  const { data, isPending, isError, error } = trpc.greeting.useQuery({
    name: "Augusto Riccardi",
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="p-10 bg-slate-300 rounded-md">
      {data && <h1 className="text-4xl font-bold">{data.text}</h1>}
    </div>
  );
}
