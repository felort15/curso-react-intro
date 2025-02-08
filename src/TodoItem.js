function TodoItem({ text, completed }) {
  return (
    <li style={{
      alignContent: 'center',
      width: '350px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginBottom: '10px',
      backgroundColor: '#f9f9f9'
    }}  >
      <span>{completed ? 'V' : 'X'}</span>
      <p>{text}</p>
    </li>
  );
}

export { TodoItem };  