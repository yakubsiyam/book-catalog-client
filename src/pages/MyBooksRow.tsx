/* eslint-disable react-hooks/rules-of-hooks */
import { useDeleteBookMutation } from '@/redux/features/books/bookApi';
import { Link } from 'react-router-dom';

const MyBooksRow = ({ book }) => {
  const { title, author, genre, _id } = book;

  const [deleteBook, { isError, isLoading, isSuccess }] =
    useDeleteBookMutation();

  const handleDelete = async () => {
    try {
      console.log('id', _id);
      await deleteBook(_id);
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {title}
      </th>
      <td className="px-6 py-4">{author}</td>
      <td className="px-6 py-4">{genre}</td>
      <td className="px-6 py-4">
        <Link
          to={`/edit-book/${_id}`}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="font-medium text-red-600 dark:text-blue-500 hover:underline ml-3"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyBooksRow;
