import { useState } from 'react';
import uuid from 'uuid/dist/v4';

export default (initialTodos) => {
	const [todos, setTodos] = useState(initialTodos);
	return {
		todos,
		addTodo: (newTodoText) =>
			setTodos([
				...todos,
				{ id: uuid(), task: newTodoText, completed: false },
			]),

		removeTodo: (todoId) => {
			// filter out removted todo
			const updatedTodo = todos.filter((todo) => todo.id !== todoId);
			// call setTod with new todo array
			setTodos(updatedTodo);
		},
		toggleTodo: (todoId) => {
			const updatedTodos = todos.map((todo) => {
				return todo.id === todoId
					? { ...todo, completed: !todo.completed }
					: todo;
			});
			setTodos(updatedTodos);
		},
		editTodo: (todoId, newTask) => {
			const updatedTodos = todos.map((todo) => {
				return todo.id === todoId ? { ...todo, task: newTask } : todo;
			});
			setTodos(updatedTodos);
		},
	};
};
