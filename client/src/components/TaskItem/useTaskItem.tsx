import {
	useRemoveTaskMutation,
	GetAllTodoDocument,
	useUpdateTaskMutation,
} from '../../generated/ApolloComponents';

export const useTaskItem = (id: string) => {
	const [removeTaskMutation] = useRemoveTaskMutation();
	const [updateTaskMutation] = useUpdateTaskMutation();

	const removeItem = () => {
		removeTaskMutation({
			variables: { id },
			refetchQueries: [{ query: GetAllTodoDocument }],
		});
	};

	const updateItem = () => {
		updateTaskMutation({
			variables: { id },
			refetchQueries: [{ query: GetAllTodoDocument }],
		});
	};

	return {
		removeItem,
		updateItem,
	};
};
