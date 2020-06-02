import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import { TodosContext } from './context/todos.context';

const EditTodoForm = ({ id, task, toggleEditForm }) => {
	const { dispatch } = useContext(TodosContext);
	const [value, handleChange, reset] = useInputState(task);

	return (
		<form
			style={{ mariginLeft: '1rem', width: '50%' }}
			onSubmit={(e) => {
				e.preventDefault();
				dispatch({ type: 'EDIT', id: id, newTask: value });
				reset();
				toggleEditForm();
			}}>
			<TextField
				margin='normal'
				value={value}
				onChange={handleChange}
				fullWidth
				autoFocus
			/>
		</form>
	);
};

export default EditTodoForm;
