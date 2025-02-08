function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2>Has completado {completedTodos} of {totalTodos  } TODOs</h2>
  );
}

export { TodoCounter }; 