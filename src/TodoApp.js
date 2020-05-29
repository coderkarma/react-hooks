import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { TodosProvider } from './context/todos.context';

const TodoApp = () => {
	// useEffect(() => {
	// 	window.localStorage.setItem('todos', JSON.stringify(todos));
	// }, [todos]);

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
					<TodosProvider>
						<TodoForm />
						<TodoList />
					</TodosProvider>
				</Grid>
			</Grid>
		</Paper>
	);
};
export default TodoApp;
