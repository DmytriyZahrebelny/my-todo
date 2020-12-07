import React from 'react';

import { useTodoListStyles } from './useTodoListStyles';
import { useTodoList } from './useTodoList';
import { AddTaskForm } from '../AddTaskForm';
import { TaskItem } from '../TaskItem';

export const TodoList = () => {
	const classes = useTodoListStyles();
	const { loading, data = { getAllTodos: [] } } = useTodoList();

	if (loading && !data) {
		return null;
	}

	return (
		<div className={classes.container}>
			<AddTaskForm />
			<div>
				{data?.getAllTodos.map(({ title, id = 'id', completed }: any) => (
					<TaskItem key={id} title={title} id={id} completed={completed} />
				))}
			</div>
		</div>
	);
};
