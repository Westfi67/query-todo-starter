
import { 
    getTodos, 
    type Todo 
} from "../api/todo"


import { useQuery } from "@tanstack/react-query";


export function List() {

    const {data, error, isPending} = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
    staleTime: 1000 * 60, // 1 minute - data is fresh for 1 minute
  });

  if (error) {
    return <p>Error loading todos</p>
  }

    if (isPending) {
      return <p>Loading todos...</p>
    }

    // if (!data) {return null}

  return (
    <ul>
     {data.data.map((todo) => (
        <li key={todo.id}>
          {todo.done ? "✅" : "⬜️"} {todo.title}
        </li>
      ))}
    </ul>
  )
}