
import { useMutation } from "@tanstack/react-query";
import { createTodo } from "./../api/todo";

export function NewTodo() {
  const mutation = useMutation({            //bez destrukturování
    mutationFn: createTodo,
  });

  return (
    <div>
      <button
        disabled={mutation.isPending}
        onClick={() => mutation.mutate({ title: "Nový úkol" })}
      >
        Přidat
      </button>

      {mutation.isPending ? <p>Odesílám…</p> : null}
      {mutation.error ? <p>Chyba: {mutation.error.message}</p> : null}
      {mutation.data ? <p>Vytvořeno id: {mutation.data.data.insertedId}</p> : null}
    </div>
  )
}