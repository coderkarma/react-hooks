import React, { createContext } from 'react';
import todoReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultTodos = [
	{
		id: 1,
		task: 'Learning React',
		completed: true,
	},
	{ id: 2, task: 'Hello World', completed: false },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export const TodosProvider = (props) => {
	const [todos, dispatch] = useLocalStorageReducer(
		'todos',
		defaultTodos,
		todoReducer
	);

	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	);
};
