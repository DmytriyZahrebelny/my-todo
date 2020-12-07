import { useGetAllTodoQuery } from '../../generated/ApolloComponents';

export const useTodoList = () => {
	const { data, loading } = useGetAllTodoQuery();

	return { loading, data };
};
