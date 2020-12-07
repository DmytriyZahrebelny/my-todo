import { makeStyles } from '@material-ui/core';

export const useTodoListStyles = makeStyles({
	item: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'space-between',
		padding: '5px 0',
	},
	remove: {
		width: 10,
		height: 10,
		fontSize: 20,
		cursor: 'pointer',
		transform: 'rotate(45deg)',
		color: 'red',
	},
});
