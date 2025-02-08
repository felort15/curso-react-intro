function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 style={{ 
      fontSize: '24px', 
      textAlign: 'center', 
      margin: '0',
      padding: '48px', 
      color: '#000000', 
      fontWeight: 'bold' 
    }}>
      Has completado {completedTodos} of {totalTodos} TODO's
    </h2>
  );
}

export { TodoCounter }; 