import { useFormik } from 'formik';
import { useAddTodoMutation, GetAllTodoDocument } from '../../generated/ApolloComponents';

export const useAddTaskForm = () => {
	const [addTodoMutation] = useAddTodoMutation();

	const { handleSubmit, getFieldProps } = useFormik({
		initialValues: {
			todo: '',
		},
		validate: (values) => {
			const errors: any = {};

			if (!values.todo) {
				errors.todo = '';
			}

			return errors;
		},
		onSubmit: ({ todo }, { resetForm }) => {
			addTodoMutation({
				variables: { title: todo },
				refetchQueries: [{ query: GetAllTodoDocument }],
			});
			resetForm();
		},
	});

	return {
		handleSubmit,
		getFieldProps,
	};
};
