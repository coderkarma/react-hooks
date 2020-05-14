import React from 'react';

const TodoList = (props) => {
	return (
		<div>
			{props.todos.map((todo) => (
				<li>{todo.task}</li>
			))}
		</div>
	);
};

export default TodoList;
