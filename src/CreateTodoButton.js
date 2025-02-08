function CreateTodoButton() {
  return (
    <button style={{
      backgroundColor: '#5a2ad7',
      color: '#ffffff',
      padding: '10px 20px',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'right',
      textTransform: 'uppercase',
      transition: 'background-color 0.3s ease',
      border: 'none',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      margin: '20px auto',
      display: 'block',
    }}>
      +
    </button>
  );
}

export { CreateTodoButton }; 