
import { useQuery } from "@tanstack/react-query";
import { getTodo } from "./../api/todo";



export function Item({ id }: { id: number }) {
  const {data, error, isPending} = useQuery({
    queryKey: ["todo", id],
    queryFn: () => {return getTodo(id)},
    staleTime: 600000, // 10 minutes
  });

  if (isPending) return <p>Loading…</p>;
  if (error) return <p>Chyba: {error.message}</p>;

  return (
    <div>
      <h3>{data.data.title}</h3>
      <p>Stav: {data.data.done ? "Hotovo" : "Rozpracováno"}</p>
    </div>
  );
}


// Ludek's version:

// import { useQuery } from "@tanstack/react-query";
// import { getTodo } from "./../api/todo";

// export function Item({ id }: {id: number}) {
//   const {data, error, isPending} = useQuery({
//     queryKey: ['todo', id],
//     queryFn: () => {return getTodo(id)},
//   });

//   if (isPending) return <p>Loading…</p>;
//   if (error) return <p>Chyba: {error.message}</p>;

//   return (
//     <div>
//       <h3>{data.data.title}</h3>
//       <p>Stav: {data.data.done ? "Hotovo" : "Rozpracováno"}</p>
//     </div>
//   );
// }