import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type Todo = {
	__typename?: 'Todo';
	id?: Maybe<Scalars['ID']>;
	title: Scalars['String'];
	completed: Scalars['Boolean'];
};

export type TodoInput = {
	title: Scalars['String'];
};

export type Query = {
	__typename?: 'Query';
	getAllTodos: Array<Maybe<Todo>>;
	getTodo: Todo;
};

export type QueryGetTodoArgs = {
	id: Scalars['ID'];
};

export type Mutation = {
	__typename?: 'Mutation';
	addTodo: Todo;
	updateTodo: Array<Maybe<Todo>>;
	removeTodo: Array<Maybe<Todo>>;
};

export type MutationAddTodoArgs = {
	todo?: Maybe<TodoInput>;
};

export type MutationUpdateTodoArgs = {
	id?: Maybe<Scalars['ID']>;
};

export type MutationRemoveTodoArgs = {
	id?: Maybe<Scalars['ID']>;
};

export type AddTodoMutationVariables = Exact<{
	title: Scalars['String'];
}>;

export type AddTodoMutation = { __typename?: 'Mutation' } & {
	addTodo: { __typename?: 'Todo' } & Pick<Todo, 'title' | 'id' | 'completed'>;
};

export type RemoveTaskMutationVariables = Exact<{
	id?: Maybe<Scalars['ID']>;
}>;

export type RemoveTaskMutation = { __typename?: 'Mutation' } & {
	removeTodo: Array<Maybe<{ __typename?: 'Todo' } & Pick<Todo, 'title' | 'id' | 'completed'>>>;
};

export type UpdateTaskMutationVariables = Exact<{
	id?: Maybe<Scalars['ID']>;
}>;

export type UpdateTaskMutation = { __typename?: 'Mutation' } & {
	updateTodo: Array<Maybe<{ __typename?: 'Todo' } & Pick<Todo, 'title' | 'id' | 'completed'>>>;
};

export type GetAllTodoQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTodoQuery = { __typename?: 'Query' } & {
	getAllTodos: Array<Maybe<{ __typename?: 'Todo' } & Pick<Todo, 'id' | 'title' | 'completed'>>>;
};

export const AddTodoDocument = gql`
	mutation addTodo($title: String!) {
		addTodo(todo: { title: $title }) {
			title
			id
			completed
		}
	}
`;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddTodoMutation(
	baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>
) {
	return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(
		AddTodoDocument,
		baseOptions
	);
}
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<
	AddTodoMutation,
	AddTodoMutationVariables
>;
export const RemoveTaskDocument = gql`
	mutation removeTask($id: ID) {
		removeTodo(id: $id) {
			title
			id
			completed
		}
	}
`;
export type RemoveTaskMutationFn = Apollo.MutationFunction<
	RemoveTaskMutation,
	RemoveTaskMutationVariables
>;

/**
 * __useRemoveTaskMutation__
 *
 * To run a mutation, you first call `useRemoveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTaskMutation, { data, loading, error }] = useRemoveTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTaskMutation(
	baseOptions?: Apollo.MutationHookOptions<RemoveTaskMutation, RemoveTaskMutationVariables>
) {
	return Apollo.useMutation<RemoveTaskMutation, RemoveTaskMutationVariables>(
		RemoveTaskDocument,
		baseOptions
	);
}
export type RemoveTaskMutationHookResult = ReturnType<typeof useRemoveTaskMutation>;
export type RemoveTaskMutationResult = Apollo.MutationResult<RemoveTaskMutation>;
export type RemoveTaskMutationOptions = Apollo.BaseMutationOptions<
	RemoveTaskMutation,
	RemoveTaskMutationVariables
>;
export const UpdateTaskDocument = gql`
	mutation updateTask($id: ID) {
		updateTodo(id: $id) {
			title
			id
			completed
		}
	}
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
	UpdateTaskMutation,
	UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateTaskMutation(
	baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>
) {
	return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
		UpdateTaskDocument,
		baseOptions
	);
}
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
	UpdateTaskMutation,
	UpdateTaskMutationVariables
>;
export const GetAllTodoDocument = gql`
	query getAllTodo {
		getAllTodos {
			id
			title
			completed
		}
	}
`;

/**
 * __useGetAllTodoQuery__
 *
 * To run a query within a React component, call `useGetAllTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTodoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTodoQuery(
	baseOptions?: Apollo.QueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>
) {
	return Apollo.useQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(
		GetAllTodoDocument,
		baseOptions
	);
}
export function useGetAllTodoLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GetAllTodoQuery, GetAllTodoQueryVariables>
) {
	return Apollo.useLazyQuery<GetAllTodoQuery, GetAllTodoQueryVariables>(
		GetAllTodoDocument,
		baseOptions
	);
}
export type GetAllTodoQueryHookResult = ReturnType<typeof useGetAllTodoQuery>;
export type GetAllTodoLazyQueryHookResult = ReturnType<typeof useGetAllTodoLazyQuery>;
export type GetAllTodoQueryResult = Apollo.QueryResult<GetAllTodoQuery, GetAllTodoQueryVariables>;
