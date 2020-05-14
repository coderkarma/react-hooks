import React, { useState } from 'react';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
// import Grid from '@material-ui/core/Grid';

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

			<TodoList todos={todos} />
		</Paper>
	);
};
export default TodoApp;

// - TodoApp
// - tODOfORM
// TODOlist
// todoItem
