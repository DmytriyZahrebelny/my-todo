import React from 'react';

import { useTodoListStyles } from './useTaskItemStyles';
import { useTaskItem } from './useTaskItem';

interface TaskItemProps {
	title: string;
	id: string;
	completed: boolean;
}

export const TaskItem: React.FC<TaskItemProps> = ({ title, id, completed }) => {
	const classes = useTodoListStyles();
	const { removeItem, updateItem } = useTaskItem(id);

	return (
		<div className={classes.item}>
			<input type='checkbox' checked={completed} onChange={updateItem} />
			{title}
			<div className={classes.remove} onClick={removeItem}>
				+
			</div>
		</div>
	);
};
