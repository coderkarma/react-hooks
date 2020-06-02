import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
	{
		id: 1,
		task: 'Get the dream job',
		completed: false,
	},
	{ id: 2, task: 'stay happy', completed: true },
];
export const TodosContext = createContext();

export const TodosProvider = (props) => {
	const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{props.children}
		</TodosContext.Provider>
	);
};
