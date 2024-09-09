import Greeting from "./_components/Greetings";
import TodoList from "./_components/TodoList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 justify-center">
      <Greeting />
      <TodoList />
    </main>
  );
}
