import { makeStyles } from '@material-ui/core';

export const useAddTaskFormStyles = makeStyles({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'baseline',
		width: 400,
		margin: '0 auto',
	},
	field: {
		width: '70%',
	},
	btn: {
		display: 'block',
		paddingRight: 20,
		paddingLeft: 20,
		height: 40,
		margin: '20px 0',
		border: 'none',
		outline: 'none',
		borderRadius: 10,
	},
});
