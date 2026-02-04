
export type Todo = {
  id: number;
  title: string;
  done: boolean;
}

export type NewTodo = Omit<Todo, "done" | "id">;

export async function getTodos(): Promise<{data: Todo[]}> {
  const res = await fetch("http://localhost:4000/api/todos")
  if (!res.ok) {
    throw new Error("Request failed")
  }
  return res.json()
}

export async function getTodo(id: number): Promise<{data: Todo}> {
  const res = await fetch(`http://localhost:4000/api/todos/${id}`)
  if (!res.ok) {
    throw new Error("Request failed")
  }
  return res.json()
}


export async function createTodo(input: NewTodo): Promise<{ data: { insertedId: number } }> {
  const res = await fetch("http://localhost:4000/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  })
  if (!res.ok) {
    throw new Error("Create failed")
  }
  return res.json()
}