import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import Todo from './Todo';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
	return (
		<Paper>
			<List>
				{todos.map((todo, index) => (
					<>
						<Todo
							task={todo.task}
							key={todo.id}
							id={todo.id}
							completed={todo.completed}
							checked={todo.checked}
							removeTodo={removeTodo}
							toggleTodo={toggleTodo}
							editTodo={editTodo}
						/>

						{index < todos.length - 1 && <Divider />}
					</>
				))}
			</List>
		</Paper>
	);
};

export default TodoList;
