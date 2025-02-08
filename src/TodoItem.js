function TodoItem({ text, completed }) {
  return (
    <li>
      <span>{completed ? 'V' : 'X'}</span>
      <p>{text}</p>
    </li>
  );
}

export { TodoItem };  