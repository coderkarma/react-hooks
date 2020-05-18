import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/dist/v4';

const TodoApp = () => {
	const intialTodos = [
		{
			id: 1,
			task: 'More Algorithms',
			completed: false,
		},
		{
			id: 2,
			task: 'Real Project',
			completed: true,
		},
		{
			id: 3,
			task: 'Group project',
			completed: false,
		},
	];
	const [todos, setTodos] = useState(intialTodos);

	const addTodo = (newTodoText) =>
		setTodos([
			...todos,
			{ id: uuid(), task: newTodoText, completed: false },
		]);

	const removeTodo = (todoId) => {
		// filter out removted todo
		const updatedTodo = todos.filter((todo) => todo.id !== todoId);
		// call setTod with new todo array
		setTodos(updatedTodo);
	};

	const toggleTodo = (todoId) => {
		const updatedTodos = todos.map((todo) => {
			return todo.id === todoId
				? { ...todo, completed: !todo.completed }
				: todo;
		});
		setTodos(updatedTodos);
	};

	const editTodo = (todoId, newTask) => {
		const updatedTodos = todos.map((todo) => {
			return todo.id === todoId ? { ...todo, task: newTask } : todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa',
			}}
			elevation={0}>
			<AppBar
				color='primary'
				position='static'
				style={{ height: '64px' }}>
				<ToolBar>
					<Typography color='inherit'> TODOS WITH HOOKS</Typography>
				</ToolBar>
			</AppBar>
			<Grid container justify='center'>
				<Grid item xs={11} md={8} lg={4} style={{ marginTop: '1rem' }}>
					<TodoForm addTodo={addTodo} />
					<TodoList
						todos={todos}
						removeTodo={removeTodo}
						toggleTodo={toggleTodo}
						editTodo={editTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
};
export default TodoApp;

// - TodoApp
// - tODOfORM
// TODOlist
// todoItem
