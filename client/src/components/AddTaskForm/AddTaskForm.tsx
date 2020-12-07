import React from 'react';
import TextField from '@material-ui/core/TextField';

import { useAddTaskForm } from './useAddTaskForm';
import { useAddTaskFormStyles } from './useAddTaskFormStyles';

export const AddTaskForm = () => {
	const { handleSubmit, getFieldProps } = useAddTaskForm();
	const classes = useAddTaskFormStyles();

	return (
		<form onSubmit={handleSubmit} className={classes.container}>
			<TextField label='Task' {...getFieldProps('todo')} className={classes.field} />
			<button type='submit' className={classes.btn}>
				Add
			</button>
		</form>
	);
};
