
export type Todo = {
  id: number;
  title: string;
  done: boolean;
}

export async function getTodos(): Promise<{data: Todo[]}> {
  const res = await fetch("http://localhost:4000/api/todos")
  if (!res.ok) {
    throw new Error("Request failed")
  }
  return res.json()
}

