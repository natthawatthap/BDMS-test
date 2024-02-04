let todos = [];

exports.getAllTodos = (req, res) => {
  res.json(todos);
};

exports.getTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json(todo);
};

exports.createTodo = (req, res) => {
  const { title } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    completed: false
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodo = req.body;
    let found = false;
  
    todos = todos.map(todo => {
      if (todo.id === id) {
        found = true;
        return { ...todo, ...updatedTodo, id };
      }
      return todo;
    });
  
    if (!found) {
      return res.status(404).json({ error: 'Todo not found' });
    }
  
    res.json({ message: 'Todo updated successfully' });
  };

exports.deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
  
    res.json({ message: 'Todo deleted successfully' });
  };